import { DefaultLogo } from '@components';

import { StyledEmptyBoxContainer, StyledEmptyBoxText } from './style';

export const EmptyBox = () => {
  return (
    <StyledEmptyBoxContainer>
      <DefaultLogo width={100} height={100} logoName='type-3-4' />
      <StyledEmptyBoxText>정보가 없습니다.</StyledEmptyBoxText>
    </StyledEmptyBoxContainer>
  );
};
