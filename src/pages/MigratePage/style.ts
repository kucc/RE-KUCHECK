import styled from 'styled-components';

import { BACKGROUND_GRAY, BLACK, GRAY, LINE_GRAY } from '@utility/COLORS';

export const StyledInput = styled.input`
  color: ${BLACK};
  width: 100%;
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

export const StyledSelect = styled.select`
  color: ${BLACK};
  width: 100%;
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
  padding: 12px 12px;
  border-radius: 25px;
  box-shadow: 0px 8px 8.5px rgba(0, 0, 0, 0.160784);
  &::placeholder {
    color: ${GRAY};
  }
`;
