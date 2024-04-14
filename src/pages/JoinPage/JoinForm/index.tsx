import { useState } from 'react';

import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
// import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';

// import { signUpRequest } from "@redux/actions/_member_action";
import { AuthInputWithLabel, AuthTextAreaWithLabel, LoadingButton } from '@components';
import { StyledForm } from '@pages/LoginPage/LoginForm/style';

import { auth, db } from '@config';
import { FORM_IS_NOT_FULL, PASSWORD_DOSE_NOT_MATCH, RandomEmoji } from '@utility';

function JoinForm() {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    comment: '',
    detail_comment: '',
    github_id: '',
    instagram_id: '',
    emoji: RandomEmoji(),
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    email,
    password,
    passwordConfirm,
    name,
    comment,
    detail_comment,
    github_id,
    instagram_id,
    emoji,
  } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const validationSignUp = () => {
    if (!email || !password || !passwordConfirm || !name || !comment) {
      return false;
    }

    return true;
  };

  const handleSignUp = async () => {
    if (isLoading) return;
    if (!validationSignUp()) {
      alert(FORM_IS_NOT_FULL);
      return;
    }

    if (password !== passwordConfirm) {
      alert(PASSWORD_DOSE_NOT_MATCH);
      return;
    }

    setIsLoading(true);

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const uid = result.user.uid;
      if (!result.user.email) throw new Error();

      await setDoc(doc(db, 'users', uid), {
        email,
        name,
        comment,
        detailComment: detail_comment,
        link: github_id,
        instaLink: instagram_id,
        role: '준회원',
        emoji,
        courseHistory: [],
      });
      alert('회원 가입에 성공했습니다!');
      history.replace('/');
    } catch (e) {
      const error = e as FirebaseError;

      if (error.code === 'auth/email-already-in-use') {
        alert('이미 해당 이메일로 가입한 계정이 있습니다.');
      } else {
        alert('알 수 없는 문제로 가입에 실패했습니다. KUCC 관리자에게 문의해주세요.');
      }
      setIsLoading(false);
    }
  };

  return (
    <StyledForm>
      <AuthInputWithLabel
        labelTitle='이메일'
        inputName='email'
        inputType='email'
        value={email}
        onChange={onChange}
      />
      <AuthInputWithLabel
        labelTitle='비밀번호'
        inputName='password'
        inputType='password'
        value={password}
        onChange={onChange}
      />
      <AuthInputWithLabel
        labelTitle='비밀번호 확인'
        inputName='passwordConfirm'
        inputType='password'
        value={passwordConfirm}
        onChange={onChange}
      />
      <AuthInputWithLabel
        labelTitle='이름'
        inputName='name'
        inputType='text'
        value={name}
        onChange={onChange}
      />
      <AuthTextAreaWithLabel
        labelTitle='한줄 소개'
        inputName='comment'
        inputType='text'
        placeholder='최대 100자 이내로 작성해주세요.'
        value={comment}
        onChange={onChange}
      />
      <AuthTextAreaWithLabel
        labelTitle='상세 소개'
        inputName='detail_comment'
        inputType='text'
        placeholder='최대 200자 이내로 작성해주세요.'
        value={detail_comment}
        onChange={onChange}
        isRequired={false}
      />
      <AuthInputWithLabel
        labelTitle='소개 링크'
        inputName='github_id'
        inputType='text'
        placeholder='깃헙 주소 ex) https://github.com/'
        value={github_id}
        onChange={onChange}
        isRequired={false}
      />
      <AuthInputWithLabel
        inputName='instagram_id'
        inputType='text'
        placeholder='인스타그램 사용자이름 ex) @kucc_rlffkdlwkqdl'
        value={instagram_id}
        onChange={onChange}
      />

      <LoadingButton
        style={{
          width: '220px',
          height: isMobile ? '52px' : '60px',
          fontSize: isMobile ? '16px' : '20px',
          margin: '18% auto',
        }}
        text='JOIN'
        onClick={() =>
          window.open(
            process.env.REACT_APP_SSO_HOST,
            '',
            'width=400,height=600,toolbar=no,menubar=no,scrollbars=no,resizable=no',
          )
        }
        isLoading={isLoading}
        isActive={validationSignUp()}
      />
    </StyledForm>
  );
}

export default JoinForm;
