import { useHistory } from 'react-router-dom';

import { AuthDescription } from '@components';
import { StyledAuthContainer, StyledCenterContainer } from '@pages/LoginPage/style';

import { useGetProfile } from '@hooks/use-get-profile';

import JoinForm from './JoinForm';

export const JoinPage = () => {
  const { user, isLoading } = useGetProfile();
  const history = useHistory();

  if (isLoading) return <div />;
  if (user) {
    history.replace('/');
  }
  0;
  return (
    <StyledCenterContainer>
      <StyledAuthContainer isLogin={false}>
        <AuthDescription />
        <JoinForm />
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
