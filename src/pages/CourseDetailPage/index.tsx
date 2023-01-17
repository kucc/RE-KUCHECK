import {
  StyledCommonLayout,
  StyledCourseTitle,
  StyledCourseDetail,
  StyledCourseDetail2
} from '@utility/COMMON_STYLE';

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
        StyledDetailTitleBase,
        StyledDetailDesc,
        StyledLine2,
      } from './style';
import { sessionDetail, sessionCurriculum, sessionStack } from './data';

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
            <StyledDescTitle>{userName}&nbsp;<span style={{fontFamily: 'sdLi'}}>님</span></StyledDescTitle>
            <StyledDescDetail>안녕하십니까~ 저는 정인아입니다요 ...</StyledDescDetail>
          </StyledDescBox>
          <img src='/img/arrow.svg' />
        </StyledDesc>
      </StyledContainer>

      <StyledContainer>
        <StyledTitle>사용 언어 및 기술 스택</StyledTitle>
        <StyledLine width="119px" />
        <StyledDesc direction="column">
          {sessionStack.map((stack, i) => (
              <>
                <StyledDetailContainer gap='11px' key={i}>
                  <StyledDetailTitle>{stack.title}</StyledDetailTitle>
                  <StyledDetailDesc>
                    {stack.desc.map((stackDetail, i) => (
                      <div key={i}>-&nbsp;{stackDetail}</div>
                    ))}
                  </StyledDetailDesc>
                </StyledDetailContainer>
              </>
            ))}
        </StyledDesc>
      </StyledContainer>

      <StyledContainer>
        <StyledTitle>세션 소개</StyledTitle>
        <StyledLine width="56px" />
        <StyledDesc direction="column" style={{gap: '10px'}}>
          <div>
            <StyledCourseTitle>바닐라 자바스크립트 세션</StyledCourseTitle>
            <StyledCourseDetail>난이도: <StyledCourseDetail2>easy</StyledCourseDetail2> / 투자시간: <StyledCourseDetail2>1학점</StyledCourseDetail2></StyledCourseDetail>
          </div>
          <StyledLine2 />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            {sessionDetail.map((detail, i)=>(
              <>
                <StyledDetailContainer gap='6px' key={i}>
                  <StyledDetailTitle>{detail.title}</StyledDetailTitle>
                  <StyledDetailDesc>
                    {detail.desc}
                  </StyledDetailDesc>
                </StyledDetailContainer>
              </>
            ))}
          </div>
        </StyledDesc>
      </StyledContainer>

      <StyledContainer>
        <StyledTitle>커리큘럼</StyledTitle>
        <StyledLine width="54px" />
        <StyledDesc direction="column" style={{gap: '8px'}}>
          {sessionCurriculum.map((curri, i) => (
            <>
              <StyledDetailContainer gap='51px' key={i}>
                <StyledDetailTitleBase>{curri.title}</StyledDetailTitleBase>
                <StyledDetailDesc>
                  {curri.desc}
                </StyledDetailDesc>
              </StyledDetailContainer>
            </>
          ))}
        </StyledDesc>
      </StyledContainer>
      
    </StyledCommonLayout>
  );
};



