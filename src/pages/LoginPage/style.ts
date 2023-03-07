import styled from 'styled-components';

import { BASE_COLOR, WHITE } from '@utility/COLORS';

export const StyledCenterContainer = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${WHITE};
  position: relative;
`;

export const StyledAuthContainer = styled.div<{ isLogin: boolean }>`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 850px;
  height: ${props => (props.isLogin ? 'calc(100vh - 54px)' : 'auto')};
  background-color: white;
`;
