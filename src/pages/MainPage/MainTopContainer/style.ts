import styled from 'styled-components';

import { BLACK, RED } from '@utility/COLORS';

export const StyledTopContainer = styled.div`
  width: 550px;
  margin: 30px auto 0px;
  text-align: center;
  position: relative;
  padding: 84px 0 60px 0;
  @media (max-width: 800px) {
    width: 300px;
    padding: 54px 0 37px 0;
  }
`;

export const StyledLogo = styled.img`
  width: 88px;
  height: 88px;
  content: url('/img/logo/type-3-1.svg');
  position: absolute;
  left: 14%;
  top: 14%;
  @media (max-width: 800px) {
    width: 52px;
    height: 52px;
    top: 36px;
    left: 32px;
  }
`;

export const StyledMainText = styled.div<{ isMain?: boolean }>`
  font-size: 72px;
  font-family: 'tmoneyBo';
  line-height: 80px;
  color: ${props => (props.isMain ? `${RED}` : `${BLACK}`)};
  @media (max-width: 800px) {
    font-size: 42px;
    line-height: 46px;
  }
`;

export const StyledContentText = styled.div`
  font-size: 22px;
  color: ${BLACK};
  margin-top: 22px;
  @media (max-width: 800px) {
    font-size: 12px;
    margin-top: 13px;
  }
`;

export const StyledSpeechBubbleContainer = styled.div`
  width: 384px;
  height: 86px;
  position: absolute;
  top: -14px;
  right: 0;
  @media (max-width: 800px) {
    width: 235px;
    height: 61px;
    top: -12px;
    right: -18px;
  }
`;

export const StyledSpeechBody = styled.div`
  position: relative;
`;

export const StyledSpeechText = styled.div`
  position: absolute;
  top: 24px;
  width: 100%;
  font-family: 'tmoneyBo';
  font-size: 14px;
  color: ${BLACK};
  @media (max-width: 800px) {
    font-size: 8px;
    top: 19px;
  }
`;

export const StyledHighLightText = styled.span`
  font-family: 'tmoneyBo';
  color: ${RED};
`;
