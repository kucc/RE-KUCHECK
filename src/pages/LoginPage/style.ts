import styled from 'styled-components';

import { BASE_COLOR } from '@utility/COLORS';

export const StyledCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${BASE_COLOR};
  position: relative;
`;

export const StyledAuthContainer = styled.div<{ isLogin: boolean }>`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: ${props => (props.isLogin ? '100vh' : 'auto')};
  background-color: white;
`;

export const StyledAuthMainImg = styled.img`
  width: 104px;
  height: 104px;
  content: url('/img/logo/type-1-3.svg');
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
