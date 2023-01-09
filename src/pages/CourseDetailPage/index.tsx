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
        StyledDetailTitleBase,
        StyledDetailDesc,
        StyledLine2,
      } from './style';
import { RED } from '@utility/COLORS';
import { userInform, sessionInform, sessionCurriculum, sessionStack } from './data';

export const CourseDetailPage = () => {
  // const courseId = props.match.params.id;
  return (
    <StyledCommonLayout>

      <StyledContainer>
        <StyledTitle>팀장</StyledTitle>
        <StyledLine width="32px" />
        <StyledDesc direction="row" style={{paddingTop: '5px', paddingBottom: '5px'}}>
          <StyledEmoji>{userInform.emoji}</StyledEmoji>
          <StyledDescBox>
            <StyledDescTitle><span style={{fontWeight: 'bold'}}>{userInform.name}</span>님</StyledDescTitle>
            <StyledDescDetail fontSize='10px'>{userInform.desc}</StyledDescDetail>
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
                      <div key={i}>- {stackDetail}</div>
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
            <StyledDescTitle style={{fontWeight: 'bold', marginBottom: '2px'}}>{sessionInform.course}</StyledDescTitle>
            <StyledDescDetail fontSize='9px'>난이도: <span style={{color: `${RED}`}}>{sessionInform.level}</span> / 투자시간: <span style={{color: `${RED}`}}>{sessionInform.credit}</span></StyledDescDetail>
          </div>
          <StyledLine2 />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            {sessionInform.detail.map((detail, i)=>(
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



