import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BLACK, RED } from '@utility';

export const StyledTopHeaderContainer = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
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

export const StyledMainLogo = styled.img`
  width: 103px;
  height: 103px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledMobileHamburgerButton = styled.img`
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

  button {
    background-color: white;
    border: 0.5px solid rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    padding: 5px;
    margin-top: 5px;
    font-family: 'sdMe';
  }
`;
