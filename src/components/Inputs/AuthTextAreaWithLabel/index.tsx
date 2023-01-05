import {
  StyledLabel,
  StyledRequiredText,
  StyledTextArea,
  Wrapper,
} from '../AuthInputWithLabel/style';

export const AuthTextAreaWithLabel = ({
  labelTitle,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
  isRequired = true,
}: any) => {
  return (
    <Wrapper isLabelTitle={labelTitle}>
      {labelTitle && <StyledLabel htmlFor={inputName}>{labelTitle}</StyledLabel>}
      {!isRequired && <StyledRequiredText>(선택)</StyledRequiredText>}
      <StyledTextArea
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};
