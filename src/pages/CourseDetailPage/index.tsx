import { useQuery } from '@tanstack/react-query';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useGetProfile } from '@hooks/use-get-profile';
import { getCourse } from '@apis';
import { QUERY_KEY } from '@constants';
import {
  StyledBackArrow,
  StyledBackArrowWrapper,
  StyledCommonPcLayout,
  StyledCourseDetail,
  StyledCourseDetail2,
  StyledCourseTitle,
} from '@utility/COMMON_STYLE';

import {
  StyledArrow,
  StyledBox,
  StyledPcModifyButton,
  StyledComment,
  StyledContainer,
  StyledCourseTitleWrapper,
  StyledCurriDesc,
  StyledCurriLine,
  StyledCurriWeekTitle,
  StyledDescBox,
  StyledDescription,
  StyledDetailContainer,
  StyledDetailDesc,
  StyledEmoji,
  StyledLeaderBox,
  StyledLeaderLine,
  StyledLine,
  StyledLine2,
  StyledName,
  StyledPcBox1,
  StyledPcBox2,
  StyledSessionDetailTitle,
  StyledSessionLine,
  StyledStackImg,
  StyledStackLine,
  StyledStackTitle,
  StyledStackWrapper,
  StyledTitle,
} from './style';
import { MainContainer } from '@pages/MainPage/style';

// import { userInfo } from 'os';

export const CourseDetailPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const courseId = match.params.id;
  const { isLoading, isError, data } = useQuery({
    queryFn: getCourse,
    queryKey: [QUERY_KEY.course, courseId],
  });

  const history = useHistory();

  const { user } = useGetProfile();

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러에요.</div>;
  console.log(data);

  const sessionStack = [
    {
      title: '주요 기술 스택',
      desc: data.language,
    },
    {
      title: '세부 기술 스택',
      desc: data.courseStack,
    },
  ];

  const sessionInform = {
    detail: [
      {
        title: '활동 소개',
        desc: data.courseInfo,
      },
      {
        title: '활동 목표',
        desc: data.courseGoal,
      },
      {
        title: '활동 인원',
        desc: data.maxMemberNum,
      },
      {
        title: '진행 요일',
        desc: data.courseDate,
      },
      {
        title: '진행 장소 및 방법',
        desc: data.coursePlace,
      },
      {
        title: '유의 사항',
        desc: data.courseNotice,
      },
    ],
  };
  return (
    <MainContainer>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <StyledBackArrowWrapper
          onClick={() => {
            history.goBack();
          }}>
          <StyledBackArrow src={`${process.env.PUBLIC_URL}/img/common/backArrow.svg`} />
        </StyledBackArrowWrapper>
        {data.courseLeader.id === user?.id ? 
          <StyledPcModifyButton>수정하기</StyledPcModifyButton>
            :
          <></> 
        }
      </div>
      
      <StyledCommonPcLayout>
        <StyledContainer>
          <StyledPcBox1>
            <div>
              <StyledLeaderLine>
                <StyledTitle>팀장</StyledTitle>
                <StyledLine />
              </StyledLeaderLine>
              <StyledLeaderBox>
                <StyledEmoji>{data.courseLeader.emoji}</StyledEmoji>
                <StyledDescBox>
                  <StyledName>
                    {data.courseLeader.name}&nbsp;<span style={{ fontFamily: 'sdLi' }}>님</span>
                  </StyledName>
                  <StyledComment>{data.courseLeader.comment}</StyledComment>
                </StyledDescBox>
                <StyledArrow
                  src={`${process.env.PUBLIC_URL}/img/common/arrow.svg`}
                  onClick={() => {
                    history.push(`/profile/${data.courseLeader.id}`);
                  }}
                />
              </StyledLeaderBox>
            </div>

            <div>
              <StyledStackLine>
                <StyledTitle>사용 언어 및 기술 스택</StyledTitle>
                <StyledLine />
              </StyledStackLine>
              <StyledBox style={{padding: '20px'}}>
                <StyledDescription>
                  {sessionStack.map((stack, i) => (
                    <StyledDetailContainer key={i}>
                      <StyledStackTitle>{stack.title}</StyledStackTitle>
                      <StyledDetailDesc>
                        {stack.desc.map((stackDetail, i) => (
                          <StyledDetailDesc key={i}>-&nbsp;{stackDetail}</StyledDetailDesc>
                        ))}
                      </StyledDetailDesc>
                    </StyledDetailContainer>
                  ))}
                </StyledDescription>
              </StyledBox>
            </div>
          </StyledPcBox1>

          <StyledPcBox2>
            <div>
              <StyledSessionLine>
                <StyledTitle>세션 소개</StyledTitle>
                <StyledLine />
              </StyledSessionLine>
              <StyledBox>
                <StyledCourseTitleWrapper>
                  <StyledCourseTitle>{data.courseName}</StyledCourseTitle>
                  <StyledStackWrapper>
                    {data.language.map((a: string, i: number) => (
                      <StyledStackImg key={i} src={`${process.env.PUBLIC_URL}/img/icon/${a}.svg`} />
                    ))}
                  </StyledStackWrapper>
                </StyledCourseTitleWrapper>
                <StyledCourseDetail>
                  난이도:&nbsp;<StyledCourseDetail2>{data.difficulty}</StyledCourseDetail2>
                  &ensp;/&ensp;투자시간:&nbsp;
                  <StyledCourseDetail2>{data.requireTime}학점</StyledCourseDetail2>
                </StyledCourseDetail>
                <StyledLine2 />
                <StyledDescription>
                  {sessionInform.detail.map((detail, i) => (
                    <StyledDetailContainer key={i}>
                      <StyledSessionDetailTitle>{detail.title}</StyledSessionDetailTitle>
                      <StyledDetailDesc style={{ width: '100%' }}>{detail.desc}</StyledDetailDesc>
                    </StyledDetailContainer>
                  ))}
                </StyledDescription>
              </StyledBox>
            </div>

            <div>
              <StyledCurriLine>
                <StyledTitle>커리큘럼</StyledTitle>
                <StyledLine />
              </StyledCurriLine>
              <StyledBox>
                <StyledCurriDesc>
                  {data.courseCurriculum.map((curri, i) => (
                    <StyledDetailContainer key={i}>
                      <StyledCurriWeekTitle>{i + 1}주차</StyledCurriWeekTitle>
                      <StyledDetailDesc>{curri}</StyledDetailDesc>
                    </StyledDetailContainer>
                  ))}
                </StyledCurriDesc>
              </StyledBox>
            </div>
          </StyledPcBox2>
        </StyledContainer>
      </StyledCommonPcLayout>
    </MainContainer>
  );
};
