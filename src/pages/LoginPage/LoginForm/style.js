import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BLACK } from '@utility/COLORS';

export const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;

  a,
  button {
    display: block;
    margin: 0 auto;
  }
`;

export const StyledSignUpButton = styled(Link)`
  color: ${BLACK};
  font-size: 16px;
  width: 40px;
  margin: 24px auto 0 auto !important;
  text-decoration: underline;
`;
