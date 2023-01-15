import styled from 'styled-components';

import { BACKGROUND_GRAY, BLACK, GRAY, LINE_GRAY } from '@utility';

export const Wrapper = styled.div<{ isLabelTitle?: string }>`
  width: 100%;
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
  margin-left: 122px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const StyledInput = styled.input`
  color: ${BLACK};
  width: calc(100% - 204px);
  margin-left: 102px;
  margin-right: 102px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  height: 60px;
  background-color: ${BACKGROUND_GRAY};
  border: 1px solid ${LINE_GRAY};
  outline: none;
  font-size: 14px;
  height: 50px;
  padding: 12px 34px;
  border-radius: 25px;
  box-shadow: 0px 8px 8.5px rgba(0, 0, 0, 0.160784);
  &::placeholder {
    color: ${GRAY};
  }
`;

export const StyledTextArea = styled.textarea<{ type: any }>`
  max-width: 600px;
  width: calc(100% - 204px);
  margin-left: 102px;
  margin-right: 102px;
  box-shadow: 0px 8px 8.5px rgba(0, 0, 0, 0.160784);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
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
`;

export const StyledRequiredText = styled.span`
  color: ${GRAY};
  font-size: 12px;
  font-family: 'sdBo';
`;
