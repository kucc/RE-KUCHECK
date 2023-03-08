import styled from 'styled-components';

export const StyledCenterContainer = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledAuthContainer = styled.div<{ isLogin: boolean }>`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 850px;
  height: ${props => (props.isLogin ? 'calc(100vh - 54px)' : 'auto')};
`;