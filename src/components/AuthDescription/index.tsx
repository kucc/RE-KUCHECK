import { useHistory } from 'react-router-dom';

import { DefaultLogo } from '@components';

import { DescriptionForm, StyledDescriptionBottomText, StyledDescriptionTopText } from './style';

export const AuthDescription = ({ isLogin = false }: { isLogin?: boolean }) => {
  const history = useHistory();

  return (
    <DescriptionForm isLogin={isLogin}>
      <DefaultLogo
        logoName='type-3-1'
        width={93}
        height={93}
        onClick={() => history.push('/')}
        isPointer={true}
      />
      <StyledDescriptionTopText color='red'>KUCC</StyledDescriptionTopText>
      <StyledDescriptionTopText color='black'>길라잡이</StyledDescriptionTopText>
      {isLogin && (
        <StyledDescriptionBottomText>
          고려대학교 중앙 컴퓨터 동아리
          <br />
          세션/스터디 관리 시스템
        </StyledDescriptionBottomText>
      )}
    </DescriptionForm>
  );
};
