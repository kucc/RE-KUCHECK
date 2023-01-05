import { useHistory } from 'react-router-dom';

import { StyledLeftArrow } from '@utility/COMMON_STYLE';

import { StyledArrowContainer, StyledLeftBackButton } from './style';

export const LeftBackButton = () => {
  const history = useHistory();

  return (
    <StyledLeftBackButton onClick={() => history.goBack()}>
      <StyledArrowContainer>
        <StyledLeftArrow width='6' thin='3' />
      </StyledArrowContainer>
    </StyledLeftBackButton>
  );
};
