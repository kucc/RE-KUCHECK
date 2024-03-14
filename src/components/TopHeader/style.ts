import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BLACK, RED, WHITE } from '@utility';

export const StyledTopHeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 84px;
  border-top: 8px solid ${RED};
  background-color: white;
  box-shadow: 0px 0px 10px #ebebeb;
  z-index: 2;
  max-width: none;

  @media (max-width: 800px) {
    height: 54px;
    border-top: 3px solid ${RED};
    box-shadow: 0px 0px 8px #ebebeb;
  }
`;

export const StyledTopHeader = styled.div`
  display: flex;
  width: 90%;
  max-width: 1280px;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  padding: 0px 16px;
`;

export const StyledDebugMode = styled.div`
  position: fixed;
  top: 0;
  width: 0;
  height: 0;
  border-right: 80px solid transparent;
  border-top: 80px solid ${RED};
`;

export const StyledDebugModeText = styled.div`
  position: fixed;
  top: 15px;
  transform: rotate(-45deg);
  color: ${WHITE};
`;

export const StyledMainLogo = styled.img`
  left: 0;
  width: 103px;
  height: 103px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledMobileHamburgerButton = styled.button`
  all: unset;
  display: none;
  cursor: pointer;
  @media (max-width: 800px) {
    display: inline;
  }
`;

export const StyledLeftContainer = styled.div`
  margin-left: auto;
  position: relative;

  a {
    font-family: 'tmoneyBo';
  }
  font-size: 18px;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`;

export const StyledTimeTableLink = styled(Link)`
  color: ${BLACK};
  margin-right: 16px;
  display: none;
  @media (max-width: 800px) {
    display: inline;
  }
`;

export const StyledLoginLink = styled(Link)`
  color: ${RED};
`;

export const StyledUserContainer = styled.span`
  font-family: 'tmoneyRe';
  color: ${BLACK};
  margin-right: 13px;
`;

export const StyledUserName = styled.span`
  font-family: 'tmoneyBo';
  margin-right: 4px;
`;

export const StyledMenuButton = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const StyledDropContent = styled.div<{ isLoginOpen: boolean }>`
  display: ${props => (props.isLoginOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 0px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 8px;
  gap: 5px;
  margin-top: 5px;
  @media (max-width: 800px) {
    right: 20px;
    min-width: 110px;
  }
  button {
    background-color: white;
    border: 0.5px solid rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    padding: 5px;
    font-family: 'sdMe';
  }
`;
