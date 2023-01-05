import PropTypes from 'prop-types';

import {
  StyledButton,
  StyledLoadingSpinner,
  StyledLoadingSpinnerContainer,
} from './style';

export const LoadingButton = ({
  width,
  height,
  htmlType,
  text,
  style,
  isLoading,
  isActive,
}) => {
  return (
    <StyledButton
      className={isActive && 'active'}
      width={width}
      height={height}
      style={style}
      htmlType={htmlType}
      shape='round'
      isLoading={isLoading}>
      {isLoading && (
        <StyledLoadingSpinnerContainer>
          <StyledLoadingSpinner />
        </StyledLoadingSpinnerContainer>
      )}
      {text}
    </StyledButton>
  );
};

LoadingButton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  htmlType: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  isLoading: PropTypes.bool,
  isActive: PropTypes.bool,
};

LoadingButton.defaultProps = {
  isActive: false,
  isLoading: false,
};
