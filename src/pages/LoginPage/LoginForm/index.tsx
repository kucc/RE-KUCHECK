import { useState } from 'react';

import { FirebaseError } from 'firebase/app';
import {
  sendPasswordResetEmail,
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import Modal from 'react-modal';
import { useHistory } from 'react-router';

import { AuthInputWithLabel, LoadingButton } from '@components';

import { auth, db } from '@config';
import { GRAY, RED, WHITE } from '@utility/COLORS';
import { RandomEmoji } from '@utility/COMMON_FUNCTION';

import { StyledForm, StyledSignUpButton } from './style';

export const LoginForm = () => {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const onChange = (event: any) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickLogin = async () => {
    if (isLoading) return;
    if (!email.length || !password.length) {
      alert('이메일이나 비밀번호를 전부 입력해주세요');
      return;
    }

    setIsLoading(true);
    try {
      const ssoResult = await fetch(`${process.env.REACT_APP_SSO_HOST}/api/auth/firebase`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, password, type: 'lms' }),
      });

      if (ssoResult.status === 404) {
        throw new Error('해당 이메일로 가입한 유저가 존재하지 않습니다.');
      } else if (ssoResult.status === 401) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }

      const {
        firebaseToken,
      }: {
        firebaseToken: string;
      } = await ssoResult.json();
      const res = await signInWithCustomToken(auth, firebaseToken);
      const user = await res.user.getIdTokenResult();

      const findUser = await getDoc(doc(db, 'users', user.claims.uid));
      if (findUser.exists()) {
        return;
      }

      await setDoc(doc(db, 'users', user.claims.uid), {
        email: user.claims.email,
        name: user.claims.name,
        comment: '',
        detailComment: '',
        link: '',
        instaLink: '',
        role: '준회원',
        emoji: RandomEmoji(),
        courseHistory: [],
      });

      history.replace(`/profile/${user.claims.uid}`);
    } catch (e) {
      const error = e as Error;
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickSendMail = async () => {
    await sendPasswordResetEmail(auth, email);
    setModal(false);
    alert('전송했습니다!');
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onClickLogin();
    }
  };

  function isSmallScreen(): boolean {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 800;
    }
    return false;
  }

  return (
    <>
      <StyledForm>
        <AuthInputWithLabel
          inputName='email'
          inputType='email'
          value={email}
          placeholder='이메일'
          onChange={onChange}
        />
        <AuthInputWithLabel
          inputName='password'
          inputType='password'
          value={password}
          placeholder='비밀번호'
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <LoadingButton
          onClick={onClickLogin}
          style={{
            width: '220px',
            height: '52px',
            fontSize: '16px',
            marginTop: 120,
          }}
          text='LOGIN'
          isLoading={isLoading}
          isActive={true}
        />
        <StyledSignUpButton
          onClick={() =>
            window.open(
              process.env.REACT_APP_SSO_HOST,
              '',
              'width=400,height=600,toolbar=no,menubar=no,scrollbars=no,resizable=no',
            )
          }>
          JOIN
        </StyledSignUpButton>
        <div
          style={{
            marginTop: 30,
            fontSize: 12,
            color: GRAY,
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setModal(true)}>
          비밀번호를 잊어버리셨나요?
          <br />
          <span style={{ textDecoration: 'underline' }}>가입했던 이메일</span>로 재설정 문자 보내기
        </div>
      </StyledForm>
      <Modal
        ariaHideApp={false}
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(69, 68, 68, 0.75)',
            zIndex: '99',
          },
          content: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            width: isSmallScreen() ? '80%' : '40%',
            height: 300,
            zIndex: '100',
          },
        }}>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 30 }}>이메일 전송하기</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            value={email}
            placeholder='이메일'
            onChange={onChange}
            style={{ border: 'none', height: 30, paddingLeft: 10, borderRadius: 10, width: 300 }}
          />
          <button
            onClick={onClickSendMail}
            style={{
              border: 'none',
              padding: '10px 20px',
              backgroundColor: RED,
              color: WHITE,
              width: 'fit-content',
              marginTop: 20,
            }}>
            전송하기
          </button>
        </div>
      </Modal>
    </>
  );
};
