import { useHistory, useLocation } from 'react-router-dom';

import { AuthDescription } from '@components';

import { useGetProfile } from '@hooks';
import { PATH } from '@utility/COMMON_FUNCTION';

import { LoginForm } from './LoginForm';
import {
  StyledAuthContainer,
  StyledAuthMainImg,
  StyledCenterContainer,
} from './style';

export const LoginPage = () => {
  const { user, isLoading } = useGetProfile();
  const { pathname } = useLocation();
  const isLogin = pathname === PATH.login; // true, false
  const history = useHistory();

  if (isLoading) return <div />;
  if (user) {
    history.replace('/');
  }

  return (
    <StyledCenterContainer>
      <StyledAuthContainer isLogin={isLogin}>
        <AuthDescription isLogin={isLogin} />
        <LoginForm />
        <StyledAuthMainImg alt='KUCC' onClick={() => history.push(PATH.main)} />
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
