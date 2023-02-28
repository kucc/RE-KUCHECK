import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';

import { db } from '@config';

import {
  StyledAttendanceButton,
  StyledCourseMembersWrapper,
  StyledMenu,
  StyledTitleWrapper,
  StyledUserWrapper,
  StyledWeekWrapper,
} from './style';

export const AttendancePage = () => {
  const [selectedCourseId, setSelectedCourseId] = useState('XFPyWbK5jzBAQn4ippxX');
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourse = async (courseId: string) => {
    setIsLoading(true);
    const docRef = doc(db, 'courses', courseId);
    const docSnap = (await getDoc(docRef)).data() as Course;
    setCourse({ ...docSnap, id: courseId });
    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedCourseId.length) {
      fetchCourse(selectedCourseId);
    }
  }, [selectedCourseId]);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <div style={{ position: 'relative' }}>
        <StyledMenu>출결관리</StyledMenu>
        <StyledAttendanceButton>수정하기</StyledAttendanceButton>
      </div>
      <StyledTitleWrapper>
        <StyledUserWrapper>
          <div>이모지</div>
          <div>이름 / 역할</div>
        </StyledUserWrapper>
        <StyledWeekWrapper>
          <div>1주차</div>
          <div>2주차</div>
          <div>3주차</div>
          <div>4주차</div>
          <div>5주차</div>
          <div>6주차</div>
          <div>7주차</div>
          <div>8주차</div>
        </StyledWeekWrapper>
        <div style={{ marginLeft: '70px', width: 'max-content' }}>보증금</div>
      </StyledTitleWrapper>
      <StyledCourseMembersWrapper>{/* 여기에 member 컴포넌트......? */}</StyledCourseMembersWrapper>
    </>
  );
};
