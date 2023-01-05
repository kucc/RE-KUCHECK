import styled from 'styled-components';

import { LINE_GRAY } from '@utility/COLORS';

export const MainBottomContainer = styled.div`
  display: flex;
`;

export const StyledMainCourse = styled.div`
  width: calc(100% - 302px);
  padding: 0 24px;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 18px;
  }
`;

export const StyledUserContainer = styled.div`
  width: 302px;
  height: 666px;
  border: 2px solid ${LINE_GRAY};
  border-radius: 17px;
  padding: 22px 26px;
  @media (max-width: 1279px) {
    display: none;
  }
`;
