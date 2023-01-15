import { useHistory } from 'react-router-dom';

import { AuthDescription } from '@components';
import {
  StyledAuthContainer,
  StyledAuthMainImg,
  StyledCenterContainer,
} from '@pages/LoginPage/style';

import { useGetProfile } from '@hooks/use-get-profile';
import { PATH } from '@utility/COMMON_FUNCTION';

import JoinForm from './JoinForm';

export const JoinPage = () => {
  const { user, isLoading } = useGetProfile();
  const history = useHistory();

  if (isLoading) return <div />;
  if (user) {
    history.replace('/');
  }
  return (
    <StyledCenterContainer>
      <StyledAuthContainer isLogin={false}>
        <AuthDescription />
        <JoinForm />
        <StyledAuthMainImg alt='KUCC' onClick={() => history.push(PATH.main)} />
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
};
