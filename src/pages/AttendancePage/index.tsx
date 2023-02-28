import { useEffect, useState } from 'react';

import { Dropdown, Menu } from 'antd';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@config';
import { useGetProfile } from '@hooks/use-get-profile';
import { useGetSemester } from '@hooks/use-get-semester';
import { RED } from '@utility/COLORS';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import {
  StyledAttendanceButton,
  StyledCourseMembersWrapper,
  StyledDropDown,
  StyledMenu,
  StyledTitleWrapper,
  StyledUserWrapper,
  StyledWeekWrapper,
} from './style';

export const AttendancePage = () => {
  const { user } = useGetProfile();

  const { currentSemester } = useGetSemester();
  const [selectedCourseId, setSelectedCourseId] = useState('XFPyWbK5jzBAQn4ippxX');
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchCourse = async (courseId: string) => {
    setIsLoading(true);
    const docRef = doc(db, 'courses', courseId);
    const docSnap = (await getDoc(docRef)).data() as Course;
    setCourse({ ...docSnap, id: courseId });
    setIsLoading(false);
  };

  const fetchMyCourses = async (user: User) => {
    setMyCourses(
      user.courseHistory
        ? user.courseHistory.filter(course => course.semester === currentSemester)
        : [],
    );
  };

  const submitUpdate = async () => {
    if (!course) return;
    setIsLoading(true);
    const courseRef = doc(db, 'courses', course.id);

    await updateDoc(courseRef, {
      // courseAttendance :
    });

    alert('수정했습니다!');
    setIsLoading(false);
    location.reload();
  };

  useEffect(() => {
    if (selectedCourseId.length) {
      fetchCourse(selectedCourseId);
    }
  }, [selectedCourseId]);

  useEffect(() => {
    if (user) {
      fetchMyCourses(user);
    }
  }, [user]);

  const CoursesMenu = (
    <Menu style={{ overflowY: 'scroll', height: '400px' }}>
      {myCourses &&
        myCourses.map(course => {
          return (
            <Menu.Item
              key={course.id}
              onClick={() => {
                setSelectedCourseId(course.id);
              }}>
              <div style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'auto' }}>
                {course.courseName}
              </div>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  const isCourseLeader = course?.courseLeader.id === user?.id;

  console.log(isCourseLeader);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
        <StyledMenu>출결관리</StyledMenu>
        <div style={{ display: 'flex' }}>
          {isCourseLeader &&
            (isEditMode ? (
              <StyledAttendanceButton onClick={submitUpdate} style={{ backgroundColor: RED }}>
                완료
              </StyledAttendanceButton>
            ) : (
              <StyledAttendanceButton onClick={() => setIsEditMode(prev => !prev)}>
                수정하기
              </StyledAttendanceButton>
            ))}
          <StyledDropDown>
            <Dropdown trigger={['click']} overlay={CoursesMenu} placement='bottomLeft'>
              <div>
                <StyledDownArrow width='5' />
                <span style={{ marginLeft: 20 }}>{course?.courseName}</span>
              </div>
            </Dropdown>
          </StyledDropDown>
        </div>
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
