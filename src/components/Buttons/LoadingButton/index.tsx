import { CSSProperties } from 'react';

import { StyledButton, StyledLoadingSpinner, StyledLoadingSpinnerContainer } from './style';

export const LoadingButton = ({
  text,
  style,
  isLoading,
  isActive,
  onClick,
}: {
  text: string;
  style: CSSProperties;
  isLoading: boolean;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <StyledButton
      className={isActive ? 'active' : ''}
      style={style}
      isLoading={isLoading}
      onClick={onClick}>
      {isLoading && (
        <StyledLoadingSpinnerContainer>
          <StyledLoadingSpinner />
        </StyledLoadingSpinnerContainer>
      )}
      {text}
    </StyledButton>
  );
};
