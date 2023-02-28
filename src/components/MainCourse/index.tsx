import { useState } from 'react';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
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

export const MainCourse = ({ course, profileId }: { course: Course; profileId?: string }) => {
  const history = useHistory();
  const NOW_SEMESTER = '23-1';

  const { user, resetUser } = useGetProfile();
  const [isLoading, setIsLoading] = useState(false);

  const {
    courseInfo,
    courseLeader,
    courseName,
    courseType,
    difficulty,
    language,
    requireTime,
    semester,
    id: courseId,
    maxMemberNum,
    courseMember,
    courseAttendance,
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
            courseInfo,
            courseLeader,
            courseName,
            courseType,
            difficulty,
            language,
            requireTime,
            semester,
            id: courseId,
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
      const courseDoc = (await getDoc(courseRef)).data();

      const newCourseHistory = courseHistory?.filter(myCourse => myCourse.id !== courseId);
      const newCourseMember = courseDoc?.courseMember.filter(
        (memberId: string) => memberId !== userId,
      );
      const newCourseAttendance = courseDoc?.courseAttendance.filter(
        (member: any) => member.id !== userId,
      );

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

  const checkIsCourseFulled = async () => {
    if (!user || isLoading) return;

    const isError =
      !courseMember.includes(user.id) &&
      user.courseHistory?.some(myCourse => myCourse.id === courseId);

    if (!isError) return;
    const { id: userId, courseHistory } = user;

    try {
      setIsLoading(true);
      const userRef = doc(db, 'users', userId);
      const newCourseHistory = courseHistory?.filter(myCourse => myCourse.id !== courseId);

      // user Update
      await updateDoc(userRef, {
        courseHistory: newCourseHistory ?? [],
      });

      resetUser();
      alert('수강 인원이 초과하여 마감되었습니다.');
    } catch (error) {
      alert('에러가 발생하였습니다. 관리자에게 문의해주세요.' + error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderButton = () => {
    if (profileId) {
      return (
        (profileId === user?.id && (
          <StyledCourseCancelButton
            onClick={e => {
              e.stopPropagation();
              dropCourse();
            }}>
            수강 취소
          </StyledCourseCancelButton>
        )) || <></>
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
      checkIsCourseFulled();
      return (
        <StyledCourseButton
          bgColor={isDisabled ? GRAY : RED}
          disabled={isDisabled}
          onClick={e => {
            e.stopPropagation();
            onClickApplication();
          }}>
          {(isDisabled && <>마감&nbsp;</>) || <>신청하기&nbsp;</>}
          {courseMember.length}/{maxMemberNum}
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
          <StyledEmoji>{course.courseLeader.emoji}</StyledEmoji>
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
      {semester === NOW_SEMESTER && renderButton()}
    </StyledMainCourseContainer>
  );
};
