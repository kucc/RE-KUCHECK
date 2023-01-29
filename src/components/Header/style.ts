import styled, { css, keyframes } from 'styled-components';

import { BLACK, LINE_GRAY, RED } from '@utility/COLORS';

const rotate = keyframes` /* 2. css코드를 씀. */
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 0%;
  }
`;

export const StyledHeaderContainer = styled.div<{ isHamburger: boolean }>`
  width: 136px;
  height: 100%;
  position: fixed;
  padding-right: 21px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    display: none;
  }

  ${props =>
    props.isHamburger &&
    css`
      display: flex !important;
      width: 230px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
      padding: 8px 22px 0 18px;
    `}

  animation: ${rotate} 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
`;

export const StyledMobileHamburgerContainer = styled.div<{ isHamburger: boolean }>`
  ${props =>
    props.isHamburger &&
    css`
      z-index: 5;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `}
`;

export const StyledMobileOverlayContainer = styled.div<{ isHamburger: boolean }>`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${BLACK};
  opacity: 0.3;
  ${props =>
    props.isHamburger &&
    css`
      display: block;
    `}
`;

export const StyledMobileLogoContainer = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const StyledHorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid ${LINE_GRAY};
  margin: 8px 0 33px 0;
`;

export const StyledLinkButton = styled.span`
  margin-bottom: 33px;
  cursor: pointer;
`;

export const StyleActive = styled.span<{ active: boolean }>`
  color: ${BLACK};
  font-size: 18px;
  padding: 2px 5px;
  ${props =>
    props.active &&
    css`
      color: ${RED};
      border-bottom: 3px solid ${RED};
    `}
  svg {
    width: 20px;
    margin-right: 12px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
