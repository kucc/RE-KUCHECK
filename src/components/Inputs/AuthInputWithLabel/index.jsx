import PropTypes from 'prop-types';

import { StyledInput, StyledLabel, StyledRequiredText, Wrapper } from './style';

export const AuthInputWithLabel = ({
  labelTitle,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
  isRequired = true,
}) => {
  return (
    <Wrapper isLabelTitle={labelTitle}>
      {labelTitle && (
        <StyledLabel htmlFor={inputName}>{labelTitle}</StyledLabel>
      )}
      {!isRequired && <StyledRequiredText>(선택)</StyledRequiredText>}
      <StyledInput
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

AuthInputWithLabel.propTypes = {
  labelTitle: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
};
