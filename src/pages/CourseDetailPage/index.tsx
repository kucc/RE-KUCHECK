import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { doc, updateDoc } from 'firebase/firestore';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';

import { Loading } from '@components';
import { MainContainer } from '@pages/MainPage/style';

import { getCourse } from '@apis';
import { db } from '@config';
import { QUERY_KEY } from '@constants';
import { useGetProfile } from '@hooks/use-get-profile';
import { StyledBackArrow, StyledBackArrowWrapper } from '@utility/COMMON_STYLE';

import { CourseIntroduce } from './CourseIntroduce';
import { CourseTimetable } from './CourseTimetable';
import {
  StyledEditButtonWrapper,
  StyledPcModifyButton,
  StyledPcModifyCompleteButton,
  StyledSelect,
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

  const [mode, setMode] = useState<'introduce' | 'timetable'>('introduce');

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

  const [courseTimetable, setCourseTimetable] = useState<any>({});

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

    const commonRef = doc(db, 'common', 'timeTable');

    await updateDoc(courseRef, {
      ...courseDetailInform,
      courseCurriculum,
    });

    await updateDoc(commonRef, {
      ...courseTimetable,
    });

    alert('수정했습니다!');
    location.reload();
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>에러에요.</div>;

  const isCourseLeader = data.courseLeader.id === user?.id;

  return (
    <MainContainer>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <StyledBackArrowWrapper
          aria-label='뒤로가기'
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
      <StyledEditButtonWrapper>
        {isEditMode && (
          <>
            <StyledSelect selected={mode === 'introduce'} onClick={() => setMode('introduce')}>
              <StyledTitle>세션 수정</StyledTitle>
            </StyledSelect>
            <StyledSelect onClick={() => setMode('timetable')} selected={mode === 'timetable'}>
              <StyledTitle>시간표 수정</StyledTitle>
            </StyledSelect>
          </>
        )}
      </StyledEditButtonWrapper>
      {mode === 'introduce' ? (
        <CourseIntroduce
          data={data}
          isEditMode={isEditMode}
          courseDetailInform={courseDetailInform}
          setCourseDetailInform={setCourseDetailInform}
          courseCurriculum={courseCurriculum}
          setCourseCurriculum={setCourseCurriculum}
        />
      ) : (
        <CourseTimetable data={data} setCourseTimetable={setCourseTimetable} />
      )}
    </MainContainer>
  );
};
