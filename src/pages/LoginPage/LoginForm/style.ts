import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BACKGROUND_GRAY, BLACK, GRAY, LINE_GRAY } from '@utility/COLORS';

export const StyledForm = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  a,
  button {
    display: block;
    margin: 0 auto;
  }
`;

export const StyledSignUpButton = styled.button`
  color: ${BLACK};
  font-size: 16px;
  width: 40px;
  margin: 24px auto 0 auto !important;
  text-decoration: underline;
  border: none;
  background-color: transparent;
`;
