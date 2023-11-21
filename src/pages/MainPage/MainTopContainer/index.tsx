import { useMediaQuery } from 'react-responsive';

import { useGetCurrentTerm } from '@hooks';

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
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const { resultText } = useGetCurrentTerm();

  return (
    <StyledTopContainer>
      <StyledLogo alt='KUCC 로고' />
      <StyledSpeechBubbleContainer>
        <StyledSpeechBody>
          {isMobile ? (
            <img src='/img/common/MobileSpeechBubble.svg' aria-hidden />
          ) : (
            <img src='/img/common/PcSpeechBubble.svg' aria-hidden />
          )}
          <StyledSpeechText>
            지금은 <StyledHighLightText>{resultText}</StyledHighLightText>입니다.{' '}
            {resultText === '휴식 기간' ? '다음 학기에 뵈어요!' : '항상 화이팅 하세요!'}
          </StyledSpeechText>
        </StyledSpeechBody>
      </StyledSpeechBubbleContainer>
      <StyledMainText isMain={true}>KUCC</StyledMainText>
      <StyledMainText>길라잡이</StyledMainText>
      <StyledContentText>고려대학교 중앙 컴퓨터 동아리 활동 관리 시스템</StyledContentText>
    </StyledTopContainer>
  );
};
