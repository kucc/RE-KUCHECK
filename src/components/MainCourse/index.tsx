import { useState } from 'react';

import { doc, updateDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

import { db } from '@config';
import { useGetProfile } from '@hooks/use-get-profile';
import { BLACK, GRAY, RED } from '@utility/COLORS';

import {
  StyledCaseSlash,
  StyledCourseBottom,
  StyledCourseButton,
  StyledCourseCancelButton,
  StyledCourseCase,
  StyledCourseCaseValue,
  StyledCourseInfo,
  StyledCourseLanguageImage,
  StyledCourseTitle,
  StyledCourseTop,
  StyledEmoji,
  StyledEmojiBackground,
  StyledLeader,
  StyledLeaderName,
  StyledLeaderType,
  StyledMainCourseContainer,
} from './style';

export const MainCourse = ({ course, profile }: { course: Course; profile?: boolean }) => {
  const history = useHistory();
  const NOW_SEMESTER = '22-2';

  const { user, resetUser } = useGetProfile();

  const [isLoading, setIsLoading] = useState(false);

  const {
    maxMemberNum,
    courseMember,
    courseAttendance,
    courseName,
    language,
    difficulty,
    requireTime,
    semester,
    id: courseId,
  } = course;

  const onClickApplication = async () => {
    if (!user || isLoading || courseMember.length >= maxMemberNum) return;
    const { id: userId, courseHistory } = user;

    try {
      setIsLoading(true);
      const courseRef = doc(db, 'courses', courseId);
      const userRef = doc(db, 'users', userId);

      const updateData = {
        courseMember: [...courseMember, userId],
        courseAttendance: [
          ...courseAttendance,
          {
            id: userId,
            attendance: [3, 3, 3, 3, 3, 3, 3, 3],
          },
        ],
      };
      // course Update
      await updateDoc(courseRef, updateData);

      // user Update
      await updateDoc(userRef, {
        courseHistory: [
          ...(courseHistory ?? []),
          {
            ...course,
            updateData,
          },
        ],
      });
      resetUser();
      alert('신청이 완료되었습니다!');
    } catch (error) {
      alert('신청에 실패했습니다. 관리자에게 문의해주세요.' + error);
    } finally {
      setIsLoading(false);
    }
  };

  const dropCourse = async () => {
    if (!user || isLoading) return;
    const { id: userId, courseHistory } = user;

    try {
      setIsLoading(true);
      const courseRef = doc(db, 'courses', courseId);
      const userRef = doc(db, 'users', userId);

      const newCourseHistory = courseHistory?.filter(myCourse => myCourse.id !== courseId);
      const newCourseMember = courseMember.filter(memberId => memberId !== userId);
      const newCourseAttendance = courseAttendance.filter(member => member.id !== userId);

      const updateData = {
        courseMember: newCourseMember ?? [],
        courseAttendance: newCourseAttendance,
      };
      // course Update
      await updateDoc(courseRef, updateData);

      // user Update
      await updateDoc(userRef, {
        courseHistory: newCourseHistory ?? [],
      });

      resetUser();
      alert('강의가 취소되었습니다.');
    } catch (error) {
      alert('취소에 실패했습니다. 관리자에게 문의해주세요.' + error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderButton = () => {
    if (semester === NOW_SEMESTER && profile) {
      return (
        <StyledCourseCancelButton
          onClick={e => {
            e.stopPropagation();
            dropCourse();
          }}>
          수강 취소
        </StyledCourseCancelButton>
      );
    } else if (courseMember.includes(user?.id ?? '')) {
      return (
        <StyledCourseButton
          bgColor={BLACK}
          disabled={true}
          onClick={e => {
            e.stopPropagation();
            onClickApplication();
          }}>
          수강중 {courseMember.length}/{maxMemberNum}
        </StyledCourseButton>
      );
    } else {
      const isDisabled = courseMember.length >= maxMemberNum;
      return (
        <StyledCourseButton
          bgColor={isDisabled ? GRAY : RED}
          disabled={isDisabled}
          onClick={e => {
            e.stopPropagation();
            onClickApplication();
          }}>
          신청하기 {courseMember.length}/{maxMemberNum}
        </StyledCourseButton>
      );
    }
  };

  return (
    <StyledMainCourseContainer
      onClick={() => {
        history.push(`/course/detail/${course.id}`);
      }}>
      {isLoading && <div>로딩중...</div>}
      <StyledLeader>
        <StyledEmojiBackground>
          <StyledEmoji>🧑‍🎤</StyledEmoji>
        </StyledEmojiBackground>
        <StyledLeaderName>
          {course.courseLeader.name} <StyledLeaderType>팀장</StyledLeaderType>
        </StyledLeaderName>
      </StyledLeader>
      <StyledCourseInfo>
        <StyledCourseTop>
          <StyledCourseTitle isEllipsis={courseName.length > 14}>{courseName}</StyledCourseTitle>
          {language.slice(0, 3).map((res, index) => {
            return (
              <StyledCourseLanguageImage
                key={index}
                src={`/img/icon/${res}.svg`}
                alt='언어 이미지'
              />
            );
          })}
        </StyledCourseTop>
        <StyledCourseBottom>
          <StyledCourseCase>
            난이도 :&nbsp;
            <StyledCourseCaseValue>{difficulty}</StyledCourseCaseValue>
          </StyledCourseCase>
          <StyledCaseSlash>/</StyledCaseSlash>
          <StyledCourseCase>
            투자시간 :&nbsp;
            <StyledCourseCaseValue>{requireTime}학점</StyledCourseCaseValue>
          </StyledCourseCase>
        </StyledCourseBottom>
      </StyledCourseInfo>
      {renderButton()}
    </StyledMainCourseContainer>
  );
};
