import { Dispatch, SetStateAction } from 'react';

import { useHistory } from 'react-router';

import {
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
  StyledSessionDetailTitle,
  StyledSessionLine,
  StyledStackImg,
  StyledStackLine,
  StyledStackTitle,
  StyledStackWrapper,
  StyledTitle,
} from '../style';

interface CourseIntroduceProps {
  data: Course;
  isEditMode: boolean;
  courseDetailInform: CourseDeatilInfo;
  setCourseDetailInform: Dispatch<SetStateAction<CourseDeatilInfo>>;
  courseCurriculum: string[];
  setCourseCurriculum: Dispatch<SetStateAction<string[]>>;
}

export const CourseIntroduce = ({
  data,
  isEditMode,
  courseDetailInform,
  setCourseDetailInform,
  courseCurriculum,
  setCourseCurriculum,
}: CourseIntroduceProps) => {
  const history = useHistory();

  const sessionStack = [
    {
      title: '사용 언어',
      desc: data.language,
    },
    {
      title: '기술 스택',
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

  return (
    <StyledCommonPcLayout>
      <StyledContainer>
        {!isEditMode && (
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
                    <StyledDetailContainer
                      style={{ gap: '0', justifyContent: 'space-between' }}
                      key={i}>
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
        )}

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
                        <StyledDetailDesc style={{ width: '100%' }}>
                          {typeof desc === 'string'
                            ? desc.split('\n').map((comment: string, i: number) => (
                                <div key={i}>
                                  {comment}
                                  <br />
                                </div>
                              ))
                            : desc}
                        </StyledDetailDesc>
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
                      <StyledDetailDesc>
                        {/* {curri.split('\n').map((comment: string, i: number) => (
                          <div key={i}>
                            {comment}
                            <br />
                          </div>
                        ))} */}
                        {curri}
                      </StyledDetailDesc>
                    )}
                  </StyledDetailContainer>
                ))}
              </StyledCurriDesc>
            </StyledBox>
          </div>
        </StyledPcBox2>
      </StyledContainer>
    </StyledCommonPcLayout>
  );
};
