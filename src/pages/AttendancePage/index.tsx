import { useEffect, useState } from 'react';

import { Dropdown, Menu } from 'antd';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '@config';
import { useGetProfile } from '@hooks/use-get-profile';
import { useGetSemester } from '@hooks/use-get-semester';
import { RED } from '@utility/COLORS';
import { StyledDownArrow } from '@utility/COMMON_STYLE';
import { word } from '@utility/CONSTANTS';

import {
  StyledAttendanceBox,
  StyledAttendanceButton,
  StyledAttendanceContainer,
  StyledAttendanceList,
  StyledCourseMembersWrapper,
  StyledDiv,
  StyledDropDown,
  StyledEmojiBackground,
  StyledMember,
  StyledMemberName,
  StyledMemberType,
  StyledMenu,
  StyledProfileLink,
  StyledProfileWrapper,
  StyledTitleWrapper,
  StyledUserWrapper,
  StyledWeekWrapper,
} from './style';

interface Attendance {
  attendance: any;
  id: string;
}

export const AttendancePage = () => {
  const { user } = useGetProfile();
  console.log(user);
  const { currentSemester } = useGetSemester();
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [memberAttendance, setMemberAttendance] = useState<Attendance[] | undefined>();
  const [membersData, setMembersData] = useState<any>();

  const fetchCourse = async (courseId: string) => {
    setIsLoading(true);
    const docRef = doc(db, 'courses', courseId);
    const docSnap = (await getDoc(docRef)).data() as Course;
    setCourse({ ...docSnap, id: courseId });
    console.log('course', course);
    setMemberAttendance(
      course?.courseAttendance.map(member => ({
        attendance: member.attendance, // 기존 attendance 정보 불러오기
        id: member.id,
      })),
    );
    console.log(memberAttendance);
    const memberList: any = [];
    for (const member of course?.courseMember ?? []) {
      const memberRef = doc(db, 'users', member);
      const memberSnap = (await getDoc(memberRef)).data() as User;
      const memberData = {
        name: memberSnap.name,
        emoji: memberSnap.emoji,
        id: member,
      };
      memberList.push({ ...memberData });
    }
    setMembersData(memberList);
    setIsLoading(false);
  };

  console.log(membersData);

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
    if (user) {
      fetchMyCourses(user);
    }
    if (user && user.courseHistory) {
      setSelectedCourseId(user.courseHistory[0].id);
    }
  }, [user]);

  useEffect(() => {
    if (selectedCourseId.length) {
      fetchCourse(selectedCourseId);
    }
  }, [selectedCourseId]);

  const checkAttendance = (memberIndex: number, weekIndex: number, value: number) => {
    const newMemberAttendance = JSON.parse(JSON.stringify(memberAttendance));
    newMemberAttendance[memberIndex].attendance[weekIndex] = value;
    setMemberAttendance(newMemberAttendance);
  };

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

  const AttendanceMenu = (memberIndex: number, weekIndex: number) => {
    return (
      <Menu
        onClick={e => {
          let value;
          if (e.key === '출석') {
            value = 0;
          } else if (e.key === '지각') {
            value = 1;
          } else if (e.key === '결석') {
            value = 2;
          } else {
            value = 3;
          }
          checkAttendance(memberIndex, weekIndex, value);
        }}
        // selectedKeys={[attendance]}
        items={Object.values(word).map(type => ({
          label: type,
          key: type,
        }))}
      />
    );
  };

  const drawAttendance = (value: number) => {
    if (value === 0) {
      return <>출석</>;
    } else if (value === 1) {
      return <>지각</>;
    } else if (value === 2) {
      return <>결석</>;
    } else if (value === 3) {
      return <>-</>;
    }
  };
  const isCourseLeader = course?.courseLeader.id === user?.id;

  console.log(isCourseLeader);

  if (isLoading) return <div>로딩중...</div>;

  return (
    <div style={{ overflow: 'auto' }}>
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
        <StyledDiv>
          <div>보증금</div>
        </StyledDiv>
      </StyledTitleWrapper>

      <StyledCourseMembersWrapper>
        {!isLoading &&
          membersData &&
          membersData?.map((member: User, memberIndex: number) => (
            <StyledAttendanceContainer key={memberIndex}>
              <StyledMember>
                <StyledEmojiBackground>{member.emoji}</StyledEmojiBackground>
                <StyledProfileWrapper>
                  <StyledMemberName>
                    {member.name}
                    {(course?.courseLeader.id === member.id && (
                      <StyledMemberType>팀장</StyledMemberType>
                    )) || <StyledMemberType>팀원</StyledMemberType>}
                  </StyledMemberName>
                  <StyledProfileLink>프로필 보러가기 {'>'}</StyledProfileLink>
                </StyledProfileWrapper>
              </StyledMember>
              <StyledAttendanceList>
                {memberAttendance &&
                  memberAttendance[memberIndex].attendance.map(
                    (week: number, weekIndex: number) => (
                      <StyledAttendanceBox key={weekIndex}>
                        <Dropdown
                          trigger={['click']}
                          overlay={AttendanceMenu(memberIndex, weekIndex)}
                          placement='bottomLeft'>
                          <div>
                            <span>{drawAttendance(week)}</span>
                          </div>
                        </Dropdown>
                      </StyledAttendanceBox>
                    ),
                  )}
              </StyledAttendanceList>
            </StyledAttendanceContainer>
          ))}
      </StyledCourseMembersWrapper>
    </div>
  );
};
