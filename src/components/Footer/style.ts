import styled from 'styled-components';

import { BACKGROUND_FOOTER, BLACK, GRAY } from '@utility/COLORS';

export const StyledFooterContainer = styled.div`
  background-color: ${BACKGROUND_FOOTER};
  color: ${BLACK};
  padding: 52px 96px 92px 96px;
  @media (max-width: 800px) {
    padding: 28px 24px 38px 24px;
  }
`;

export const StyledFooter = styled.div`
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StyledFooterMargin = styled.div`
  margin: 0 302px 0 136px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.div`
  flex-basis: 165px;
  flex-shrink: 0;
  font-size: 16px;
  font-family: 'tmoneyBo';
  @media (max-width: 800px) {
    font-size: 7px;
    flex-basis: 80px;
  }
`;

export const StyledContent = styled.div`
  font-family: 'sdLi';
  word-break: keep-all;
  @media (max-width: 800px) {
    font-size: 6px;
  }
`;

export const StyledSubContent = styled.span`
  font-family: 'sdBo';
  margin-right: 8px;
`;

export const StyledHorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid ${GRAY};
  margin: 36px 0;
  @media (max-width: 800px) {
    margin: 16px 0;
  }
`;

export const StyledFooterGithubLink = styled.a`
  font-size: 14px;
  font-family: 'sdLi';
  color: ${BLACK};
  @media (max-width: 800px) {
    font-size: 7px;
  }
`;

export const StyledCopyRight = styled.span`
  margin-left: 10px;
  font-family: 'sdLi';
  span {
    font-family: 'sdBo';
  }
  @media (max-width: 800px) {
    font-size: 7px;
    margin-left: 4px;
  }
`;

export const StyledFooterLogo = styled.img`
  width: 71px;
  height: 71px;
  content: url('/img/logo/type-1-3.svg');
  @media (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
`;
