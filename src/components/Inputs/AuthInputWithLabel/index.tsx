import { StyledInput, StyledLabel, StyledRequiredText, Wrapper } from './style';

export const AuthInputWithLabel = ({
  labelTitle,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
  isRequired = true,
  onKeyPress,
}: {
  labelTitle?: string;
  inputName?: string;
  inputType?: string;
  placeholder?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isRequired?: boolean;
  onKeyPress?: any;
}) => {
  return (
    <Wrapper isLabelTitle={labelTitle}>
      {labelTitle && <StyledLabel htmlFor={inputName}>{labelTitle}</StyledLabel>}
      {!isRequired && <StyledRequiredText>(선택)</StyledRequiredText>}
      <StyledInput
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </Wrapper>
  );
};
