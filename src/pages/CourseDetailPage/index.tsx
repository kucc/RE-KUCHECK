import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { doc, updateDoc } from 'firebase/firestore';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';

import { MainContainer } from '@pages/MainPage/style';

import { getCourse } from '@apis';
import { db } from '@config';
import { QUERY_KEY } from '@constants';
import { useGetProfile } from '@hooks/use-get-profile';
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
  StyledDetailInput,
  StyledEmoji,
  StyledLeaderBox,
  StyledLeaderLine,
  StyledLine,
  StyledLine2,
  StyledName,
  StyledPcBox1,
  StyledPcBox2,
  StyledPcModifyButton,
  StyledPcModifyCompleteButton,
  StyledSessionDetailTitle,
  StyledSessionLine,
  StyledStackImg,
  StyledStackLine,
  StyledStackTitle,
  StyledStackWrapper,
  StyledTitle,
} from './style';

// import { userInfo } from 'os';

export const CourseDetailPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const courseId = match.params.id;

  const { isLoading, isError, data } = useQuery({
    queryFn: getCourse,
    queryKey: [QUERY_KEY.course, courseId],
  });

  const history = useHistory();

  const { user } = useGetProfile();

  const [isEditMode, setIsEditMode] = useState(false);

  const [courseDetailInform, setCourseDetailInform] = useState<CourseDeatilInfo>({
    courseInfo: '',
    courseGoal: '',
    maxMemberNum: 0,
    courseDate: '',
    coursePlace: '',
    courseNotice: '',
  });

  const [courseCurriculum, setCourseCurriculum] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  useEffect(() => {
    if (data) {
      setCourseDetailInform({
        courseInfo: data.courseInfo,
        courseGoal: data.courseGoal,
        maxMemberNum: data.maxMemberNum,
        courseDate: data.courseDate,
        coursePlace: data.coursePlace,
        courseNotice: data.courseNotice,
      });
      setCourseCurriculum(data.courseCurriculum);
    }
  }, [data]);

  const onSubmitEdit = async () => {
    const courseRef = doc(db, 'courses', courseId);

    await updateDoc(courseRef, {
      ...courseDetailInform,
      courseCurriculum,
    });

    alert('수정했습니다!');
    location.reload();
  };

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러에요.</div>;

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

  const sessionInform: {
    title: string;
    desc: string | number;
    type: keyof CourseDeatilInfo;
  }[] = [
    {
      title: '활동 소개',
      desc: courseDetailInform.courseInfo,
      type: 'courseInfo',
    },
    {
      title: '활동 목표',
      desc: courseDetailInform.courseGoal,
      type: 'courseGoal',
    },
    {
      title: '활동 인원',
      desc: courseDetailInform.maxMemberNum,
      type: 'maxMemberNum',
    },
    {
      title: '진행 요일',
      desc: courseDetailInform.courseDate,
      type: 'courseDate',
    },
    {
      title: '진행 장소 및 방법',
      desc: courseDetailInform.coursePlace,
      type: 'coursePlace',
    },
    {
      title: '유의 사항',
      desc: courseDetailInform.courseNotice,
      type: 'courseNotice',
    },
  ];

  const isCourseLeader = data.courseLeader.id === user?.id;

  return (
    <MainContainer>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <StyledBackArrowWrapper
          onClick={() => {
            history.goBack();
          }}>
          <StyledBackArrow src={`${process.env.PUBLIC_URL}/img/common/backArrow.svg`} />
        </StyledBackArrowWrapper>
        {isCourseLeader &&
          (!isEditMode ? (
            <StyledPcModifyButton onClick={() => setIsEditMode(prev => !prev)}>
              수정하기
            </StyledPcModifyButton>
          ) : (
            <StyledPcModifyCompleteButton onClick={onSubmitEdit}>
              수정완료
            </StyledPcModifyCompleteButton>
          ))}
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
              <StyledBox style={{ padding: '20px' }}>
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
                  {sessionInform.map((inform, i) => {
                    const { title, desc, type } = inform;
                    return (
                      <StyledDetailContainer key={i}>
                        <StyledSessionDetailTitle>{title}</StyledSessionDetailTitle>
                        {isEditMode ? (
                          <StyledDetailInput
                            value={desc}
                            defaultValue={desc}
                            onChange={e =>
                              setCourseDetailInform(prev => {
                                const next = { ...prev };

                                if (type === 'maxMemberNum') {
                                  next[type] = Number(e.target.value);
                                } else {
                                  next[type] = e.target.value;
                                }

                                return next;
                              })
                            }
                          />
                        ) : (
                          <StyledDetailDesc style={{ width: '100%' }}>{desc}</StyledDetailDesc>
                        )}
                      </StyledDetailContainer>
                    );
                  })}
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
                  {courseCurriculum.map((curri, i) => (
                    <StyledDetailContainer key={i}>
                      <StyledCurriWeekTitle>{i + 1}주차</StyledCurriWeekTitle>
                      {isEditMode ? (
                        <StyledDetailInput
                          value={curri}
                          defaultValue={curri}
                          onChange={e =>
                            setCourseCurriculum(prev => {
                              const next = [
                                ...prev.slice(0, i),
                                e.target.value,
                                ...prev.slice(i + 1, prev.length + 1),
                              ];

                              return next;
                            })
                          }
                        />
                      ) : (
                        <StyledDetailDesc>{curri}</StyledDetailDesc>
                      )}
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
