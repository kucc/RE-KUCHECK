import { useMediaQuery } from 'react-responsive';

import { MobileSpeechBubble, PcSpeechBubble } from '@/svg/main';

import {
  StyledContentText,
  StyledHighLightText,
  StyledLogo,
  StyledMainText,
  StyledSpeechBody,
  StyledSpeechBubbleContainer,
  StyledSpeechText,
  StyledTopContainer,
} from './style';

export const MainTopContainer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });

  return (
    <StyledTopContainer>
      <StyledLogo alt='logo' />
      <StyledSpeechBubbleContainer>
        <StyledSpeechBody>
          {isMobile ? <MobileSpeechBubble /> : <PcSpeechBubble />}
          <StyledSpeechText>
            지금은 <StyledHighLightText>휴식 기간</StyledHighLightText>입니다.
            다음 학기에 뵈어요!
          </StyledSpeechText>
        </StyledSpeechBody>
      </StyledSpeechBubbleContainer>
      <StyledMainText main>KUCC</StyledMainText>
      <StyledMainText>길라잡이</StyledMainText>
      <StyledContentText>
        고려대학교 중앙 컴퓨터 동아리 활동 관리 시스템
      </StyledContentText>
    </StyledTopContainer>
  );
};
