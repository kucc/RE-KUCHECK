import { StyledCommonLayout } from '@utility/COMMON_STYLE';
import {
        StyledContainer,
        StyledTitle,
        StyledLine,
        StyledDesc,
        StyledDescBox,
        StyledDescTitle,
        StyledDescDetail,
        StyledEmoji,
        StyledDetailContainer,
        StyledDetailTitle,
        StyledDetailTitle2,
        StyledDetailDesc,
        StyledLine2,
      } from './style';
import { RED } from '@utility/COLORS';

export const CourseDetailPage = () => {
  // const courseId = props.match.params.id;
  const userName = '정인아';
  return (
    <StyledCommonLayout>

      <StyledContainer>
        <StyledTitle>팀장</StyledTitle>
        <StyledLine width="32px" />
        <StyledDesc direction="row" style={{paddingTop: '5px', paddingBottom: '5px'}}>
          <StyledEmoji>🧑</StyledEmoji>
          <StyledDescBox>
            <StyledDescTitle><span style={{fontWeight: 'bold'}}>{userName}</span>님</StyledDescTitle>
            <StyledDescDetail fontSize='10px'>안녕하십니까~ 저는 정인아입니다요 ...</StyledDescDetail>
          </StyledDescBox>
          <img src='/img/arrow.svg' />
        </StyledDesc>
      </StyledContainer>

      <StyledContainer>
        <StyledTitle>사용 언어 및 기술 스택</StyledTitle>
        <StyledLine width="119px" />
        <StyledDesc direction="column">
          <StyledDetailContainer gap='11px'>
            <StyledDetailTitle>주요 기술 스택</StyledDetailTitle>
            <StyledDetailDesc>
              <div>- Javascript</div>
              <div>- React</div>
              <div>- HTML</div>
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='11px'>
            <StyledDetailTitle>세부 기술 스택</StyledDetailTitle>
            <StyledDetailDesc>
              <div>- Git</div>
              <div>- Antd</div>
              <div>- Firebase</div>
              <div>- Redux</div>
            </StyledDetailDesc>
          </StyledDetailContainer>
        </StyledDesc>
      </StyledContainer>

      <StyledContainer>
        <StyledTitle>세션 소개</StyledTitle>
        <StyledLine width="56px" />
        <StyledDesc direction="column" style={{gap: '10px'}}>
          <div>
            <StyledDescTitle style={{fontWeight: 'bold', marginBottom: '2px'}}>바닐라 자바스크립트 세션</StyledDescTitle>
            <StyledDescDetail fontSize='9px'>난이도: <span style={{color: `${RED}`}}>easy</span> / 투자시간: <span style={{color: `${RED}`}}>1학점</span></StyledDescDetail>
          </div>
          <StyledLine2 />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <StyledDetailContainer gap='6px'>
              <StyledDetailTitle>활동 소개</StyledDetailTitle>
              <StyledDetailDesc>
                저번 학기 해커톤에서 진행했던 프로젝트인데, 시간상 완성하지 못하고 끝내는 게 아쉬워서 이번 학기에 여러분들과 함께 완성시켜보고자 합니다!
              </StyledDetailDesc>
            </StyledDetailContainer>
            <StyledDetailContainer gap='6px'>
              <StyledDetailTitle>활동 목표</StyledDetailTitle>
              <StyledDetailDesc>
                세션 / 스터디 / 프로젝트를 자동화하는 시스템 제작하기. 주된 기능은 세션 및 스터디 등록 및 조회, 출석 확인 및 수정, 유저별 세션 및 스터디 기록 등이 있습니다. 주요 기능부터 하나 하나씩 구현해 나갈 예정입니다!
              </StyledDetailDesc>
            </StyledDetailContainer>
            <StyledDetailContainer gap='6px'>
              <StyledDetailTitle>활동 인원</StyledDetailTitle>
              <StyledDetailDesc>
                최대 6명
              </StyledDetailDesc>
            </StyledDetailContainer>
            <StyledDetailContainer gap='6px'>
              <StyledDetailTitle>진행 요일</StyledDetailTitle>
              <StyledDetailDesc>
                매주 월요일 오후 8시
              </StyledDetailDesc>
            </StyledDetailContainer>
            <StyledDetailContainer gap='6px'>
              <StyledDetailTitle>진행 장소<br/>및 방법</StyledDetailTitle>
              <StyledDetailDesc>
                참여하신 분들의 동의를 받아 동방에서 진행할 예정입니다. 다만 시간, 거리상 안맞거나 코로나 상황이 심각해질 경우 온라인(줌)으로 진행할 수도 있습니다.
              </StyledDetailDesc>
            </StyledDetailContainer>
            <StyledDetailContainer gap='6px'>
              <StyledDetailTitle>유의 사항</StyledDetailTitle>
              <StyledDetailDesc>
                HTML, CSS, JAVASCRIPT, React의 간단한 문법이나 구현 등을 아시는 분들을 대상으로 하고 있습니다. 깃이나 리액트 관련 라이브러리 사용 경험이 있으시면 더 좋을 것 같습니다!
              </StyledDetailDesc>
            </StyledDetailContainer>
          </div>
        </StyledDesc>
      </StyledContainer>

      <StyledContainer>
        <StyledTitle>커리큘럼</StyledTitle>
        <StyledLine width="54px" />
        <StyledDesc direction="column" style={{gap: '8px'}}>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>1주차</StyledDetailTitle2>
            <StyledDetailDesc>
              기존 코드 공부하기 / 고칠 점 정리 / 로직짜기
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>2주차</StyledDetailTitle2>
            <StyledDetailDesc>
              메인, 로그인, 회원가입, 공지사항, 등록
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>3주차</StyledDetailTitle2>
            <StyledDetailDesc>
              2주차 마무리, 마이페이지
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>4주차</StyledDetailTitle2>
            <StyledDetailDesc>
              세션 페이지, 스터디 페이지
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>5주차</StyledDetailTitle2>
            <StyledDetailDesc>
              출결 페이지
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>6주차</StyledDetailTitle2>
            <StyledDetailDesc>
              보완
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>7주차</StyledDetailTitle2>
            <StyledDetailDesc>
              디버깅, 보안 규칙 세우기(firebase, 외부인 회원가입)
            </StyledDetailDesc>
          </StyledDetailContainer>
          <StyledDetailContainer gap='51px'>
            <StyledDetailTitle2>8주차</StyledDetailTitle2>
            <StyledDetailDesc>
              완성 및 배포
            </StyledDetailDesc>
          </StyledDetailContainer>
        </StyledDesc>
      </StyledContainer>
      
    </StyledCommonLayout>
  );
};



