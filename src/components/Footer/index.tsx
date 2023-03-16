import {
  StyledContent,
  StyledCopyRight,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterGithubLink,
  StyledFooterLogo,
  StyledFooterMargin,
  StyledHorizontalLine,
  StyledRow,
  StyledSubContent,
  StyledTitle,
} from './style';

export const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooter>
        <StyledFooterMargin>
          <StyledRow>
            <StyledTitle>Creators</StyledTitle>
            <StyledContent>
              <StyledSubContent>바닐라 자바칩</StyledSubContent>
              곽나경 · 김채린 · 박가영 · 정인아
            </StyledContent>
          </StyledRow>
          <StyledRow>
            <StyledTitle>Developers</StyledTitle>
            <StyledContent>
              <StyledSubContent>KUCHECKCHECK</StyledSubContent>
              강태웅 · 김세진 · 김채린 · 명재위 · 이희준 · 정인아
            </StyledContent>
          </StyledRow>
          <StyledRow>
            <StyledTitle>Renewers</StyledTitle>
            <StyledContent>
              <StyledSubContent>KURECHECK</StyledSubContent>
              김유나 · 이희준
            </StyledContent>
          </StyledRow>
          <StyledRow>
            <StyledTitle>Github</StyledTitle>
            <StyledFooterGithubLink href='https://github.com/kucc/RE-KUCHECK' target='_blank'>
              https://github.com/kucc/RE-KUCHECK
            </StyledFooterGithubLink>
          </StyledRow>
          <StyledRow>
            <StyledTitle>Contact</StyledTitle>
            <StyledContent>
              Korea University Computer Club (고려대학교 중앙 컴퓨터 동아리)
            </StyledContent>
          </StyledRow>
          <StyledHorizontalLine />
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <StyledFooterLogo />
            <StyledCopyRight>
              Copyright <span>ⓒ KUCC</span> All Rights Reserved.
            </StyledCopyRight>
          </div>
        </StyledFooterMargin>
      </StyledFooter>
    </StyledFooterContainer>
  );
};
