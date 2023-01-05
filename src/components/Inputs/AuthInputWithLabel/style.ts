import styled from 'styled-components';

import { BACKGROUND_GRAY, BLACK, GRAY, LINE_GRAY } from '@utility';

export const Wrapper = styled.div<{ isLabelTitle?: boolean }>`
  margin-top: ${props => (props.isLabelTitle ? '38px' : '20px')};
  &:first-child {
    margin: 0;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 16px;
  font-family: 'sdBo';
  color: ${BLACK};
  margin: 0 6px 8px 30px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const StyledInput = styled.input`
  color: ${BLACK};
  width: 100%;
  height: 60px;
  font-size: 18px;
  padding: 20px 34px;
  background-color: ${BACKGROUND_GRAY};
  border-radius: 39px;
  border: 1px solid ${LINE_GRAY};
  outline: none;
  &::placeholder {
    color: ${GRAY};
  }
  @media (max-width: 1224px) {
    font-size: 14px;
    height: 52px;
    padding: 12px 34px;
    border-radius: 25px;
  }
`;

export const StyledTextArea = styled.textarea<{ type: any }>`
  width: 100%;
  height: 117px;
  padding: 20px 28px;
  font-size: 16px;
  color: ${BLACK};
  background-color: ${BACKGROUND_GRAY};
  border: 1px solid ${LINE_GRAY};
  border-radius: 20px;
  resize: none;
  outline: none;
  &::placeholder {
    color: ${GRAY};
  }
  @media (max-width: 1224px) {
    font-size: 14px;
  }
`;

export const StyledRequiredText = styled.span`
  color: ${GRAY};
  font-size: 12px;
  font-family: 'sdBo';
`;
