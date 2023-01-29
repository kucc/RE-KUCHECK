import styled from 'styled-components';

import { LINE_GRAY } from '@utility/COLORS';

export const StyledLeftBackButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid ${LINE_GRAY};
  border-radius: 50%;
  background-color: white;
  @media (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledArrowContainer = styled.span`
  display: inline-flex;
  margin-left: 6px;
  @media (max-width: 800px) {
    margin-left: 2px;
    margin-bottom: 7px;
  }
`;
