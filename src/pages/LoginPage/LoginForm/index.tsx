import { useState } from 'react';

import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router';

// import { useDispatch, useSelector } from "react-redux";
// import { loginRequest } from '@redux/actions/_member_action';
import { AuthInputWithLabel, LoadingButton } from '@components';

import { auth } from '@config';
import { PATH } from '@utility/COMMON_FUNCTION';

import { StyledForm, StyledSignUpButton } from './style';

export const LoginForm = () => {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const [isLoading, setIsLoading] = useState(false);

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
      await signInWithEmailAndPassword(auth, email, password);
      history.replace('/');
    } catch (e) {
      const error = e as FirebaseError;
      if (error.code === 'auth/invalid-email') {
        alert('이메일이 유효하지 않습니다.');
      } else if (error.code === 'auth/wrong-password') {
        alert('비밀번호가 일치하지 않습니다.');
      } else if (error.code === 'auth/user-not-found') {
        alert('해당 이메일로 가입한 유저가 존재하지 않습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
      />
      <LoadingButton
        onClick={onClickLogin}
        style={{
          width: '220px',
          height: '52px',
          fontSize: '16px',
          marginTop: '18%',
        }}
        text='LOGIN'
        isLoading={isLoading}
        isActive={true}
      />
      <StyledSignUpButton to={PATH.signUp}>JOIN</StyledSignUpButton>
    </StyledForm>
  );
};
