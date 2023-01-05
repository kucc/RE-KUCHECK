import styled, { keyframes } from 'styled-components';

import { BACKGROUND_GRAY, BLACK, RED } from '@utility';

export const StyledButton = styled.button`
  color: ${BLACK};
  background-color: ${BACKGROUND_GRAY};
  font-size: 18px;
  font-family: 'tmoneyBo';
  border: none;
  border-radius: 30px;
  cursor: 'pointer';
  @media (max-width: 1224px) {
    font-size: 16px;
  }
  &.active {
    color: white;
    border-color: white;
    background: ${RED};
  }
  opacity: ${props => props.isLoading && '0.6'};
`;

export const StyledLoadingSpinnerContainer = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-right: 10px;
`;

const spinnerFrames = keyframes`
  to {transform: rotate(360deg);}
`;
export const StyledLoadingSpinner = styled.span`
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: ${spinnerFrames} 0.6s linear infinite;
  }
`;
