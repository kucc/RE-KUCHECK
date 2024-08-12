import { useEffect, useState } from 'react';

import { Dropdown, Menu } from 'antd';
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { useRecoilState } from 'recoil';

import { Loading } from '@components';
import { StyledHighLightText } from '@pages/MainPage/MainTopContainer/style';

import { db } from '@config';
import { useGetCurrentTerm, useGetProfile, useGetSemester, useRedirectToMain } from '@hooks';
import { selectedCourseState } from '@recoil/attendance';
import { ATTENDANCE_SUCCESS, RED, StyledDownArrow, word } from '@utility';

import {
  StyledAttendanceBox,
  StyledAttendanceButton,
  StyledAttendanceContainer,
  StyledAttendanceList,
  StyledAttendanceState,
  StyledButtonWrapper,
  StyledCourseMembersWrapper,
  StyledCourseName,
  StyledDeposit,
  StyledDepositBox,
  StyledDropDown,
  StyledDropDownList,
  StyledEmojiBackground,
  StyledLayout,
  StyledMember,
  StyledMemberName,
  StyledMemberType,
  StyledMenu,
  StyledProfileLink,
  StyledProfileWrapper,
  StyledTermText,
  StyledTitleWrapper,
  StyledTopWrapper,
  StyledUserWrapper,
  StyledWeekWrapper,
} from './style';
import { calculateDeposit, modifyArray } from './utils';

interface MemberData {
  attendance: (0 | 1 | 2 | 3 | 4)[];
  name: string;
  emoji: string;
  id: string;
  deposit: number;
}
/* TODO: 학기별로 조회 가능하도록 */
export const AttendancePage = () => {
  const { user } = useGetProfile();
  const { checkedSemester } = useGetSemester();

  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [selectedCourseIndex, setSelectedCourseIndex] = useRecoilState(selectedCourseState);
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [membersData, setMembersData] = useState<MemberData[]>([]);

  const { resultText } = useGetCurrentTerm();

  useRedirectToMain();

  const fetchCourse = async (courseId: string) => {
    setIsLoading(true);

    const docRef = doc(db, 'courses', courseId);
    const docSnap = (await getDoc(docRef)).data() as Course;
    const newCourse = { ...docSnap, id: courseId };

    const newMemberList: MemberData[] = [];
    for await (const member of newCourse.courseAttendance) {
      const { id, attendance } = member;
      const memberRef = doc(db, 'users', id);
      const memberSnap = (await getDoc(memberRef)).data() as User;
      const { name, emoji } = memberSnap;
      const deposit = calculateDeposit(attendance);
      newMemberList.push({ attendance, name, emoji, id, deposit });
    }

    setCourse(newCourse);
    setMembersData(newMemberList);
    setIsLoading(false);
  };

  const fetchCoursesBySemester = async (semester: string) => {
    const q = query(collection(db, 'courses'), where('semester', '==', semester));
    return await getDocs(q);
  };

  const fetchAllCourses = async (checkedSemester: string) => {
    let querySnapshot = await fetchCoursesBySemester(checkedSemester);

    if (querySnapshot?.docs.length === 0) {
      const commonDocRef = doc(db, 'common', 'commonInfo');
      const commonDocData = (await getDoc(commonDocRef)).data();
      const pastSemester = commonDocData?.pastSemester?.slice(-2, -1)[0];

      if (pastSemester) {
        querySnapshot = await fetchCoursesBySemester(pastSemester);
      }
    }

    if (querySnapshot) {
      const newCourses = [];
      const myCoursesId = [];

      for (const doc of querySnapshot.docs) {
        const docData = doc.data() as Course;
        newCourses.push({ ...docData, id: doc.id });
        if (docData.courseMember.includes(user?.id ?? '')) {
          myCoursesId.push(doc.id);
        }
      }

      if (myCoursesId.length) {
        setSelectedCourseId(myCoursesId[selectedCourseIndex]);
      } else if (newCourses.length) {
        setSelectedCourseId(newCourses[selectedCourseIndex].id);
      }
      setMyCourses(newCourses);
    }
  };

  const submitUpdate = async () => {
    if (!course) return;
    setIsLoading(true);
    const courseRef = doc(db, 'courses', course.id);

    await updateDoc(courseRef, {
      courseAttendance: membersData.map(memberData => {
        const { id, attendance } = memberData;
        return { id, attendance };
      }),
    });

    alert(ATTENDANCE_SUCCESS);
    setIsLoading(false);
    location.reload();
  };

  const checkAttendance = (memberIndex: number, weekIndex: number, value: number) => {
    setMembersData(prev => {
      const currentMemberData = prev[memberIndex];
      const { attendance } = currentMemberData;
      const newWeek = modifyArray(attendance, weekIndex, value);
      const updatedDeposit = calculateDeposit(newWeek);
      const newMembersData = modifyArray(prev, memberIndex, {
        ...currentMemberData,
        attendance: newWeek,
        deposit: updatedDeposit,
      });
      return newMembersData;
    });
  };

  useEffect(() => {
    if (checkedSemester) {
      fetchAllCourses(checkedSemester);
    }
  }, [checkedSemester]);

  useEffect(() => {
    if (selectedCourseId.length) {
      fetchCourse(selectedCourseId);
    }
  }, [selectedCourseId]);

  const CoursesMenu = (
    <StyledDropDownList>
      <Menu>
        {myCourses &&
          myCourses.map((course, i) => {
            return (
              <Menu.Item
                key={course.id}
                onClick={() => {
                  setSelectedCourseIndex(i);
                  setSelectedCourseId(course.id);
                }}>
                <StyledCourseName myCourse={course.courseMember.includes(user?.id ?? '')}>
                  {course.courseName}
                </StyledCourseName>
              </Menu.Item>
            );
          })}
      </Menu>
    </StyledDropDownList>
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
          } else if (e.key === '유고결석') {
            value = 4;
          } else {
            value = 3;
          }
          checkAttendance(memberIndex, weekIndex, value);
        }}
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
    } else if (value === 4) {
      return <>유고결석</>;
    }
  };

  const isCourseLeader = course?.courseLeader.id === user?.id;
  const isCourseOtherLeader = course?.courseOtherLeaders?.some(
    otherLeader => otherLeader.id === user?.id,
  );

  if (isLoading) return <Loading />;

  return (
    <StyledLayout>
      <>
        <StyledTopWrapper>
          <StyledMenu>
            <div>출결관리</div>
            <StyledTermText>
              지금은 <StyledHighLightText>{resultText}</StyledHighLightText>입니다.
            </StyledTermText>
          </StyledMenu>
          <StyledButtonWrapper>
            {(isCourseLeader || isCourseOtherLeader) &&
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
                  <StyledDownArrow width='5' style={{ marginLeft: '3px' }} />
                  <span>{course?.courseName}</span>
                </div>
              </Dropdown>
            </StyledDropDown>
          </StyledButtonWrapper>
        </StyledTopWrapper>
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
          <StyledDeposit>
            <div>보증금</div>
          </StyledDeposit>
        </StyledTitleWrapper>

        <StyledCourseMembersWrapper>
          {membersData.map((memberData: MemberData, memberIndex: number) => {
            const { id, attendance, name, emoji, deposit } = memberData;
            const isLeader = course?.courseLeader.id === memberData.id;
            const isOtherLeader = course?.courseOtherLeaders?.some(
              otherLeader => otherLeader.id === memberData.id,
            );

            return (
              <StyledAttendanceContainer key={memberIndex}>
                <StyledMember>
                  <StyledEmojiBackground>{emoji}</StyledEmojiBackground>
                  <StyledProfileWrapper>
                    <StyledMemberName>
                      {name}
                      {isLeader && <StyledMemberType>팀장</StyledMemberType>}
                      {isOtherLeader && <StyledMemberType>공동 팀장</StyledMemberType>}
                      {!isLeader && !isOtherLeader && <StyledMemberType>팀원</StyledMemberType>}
                    </StyledMemberName>
                    <StyledProfileLink href={`/profile/${id}`}>
                      프로필 보러가기 {'>'}
                    </StyledProfileLink>
                  </StyledProfileWrapper>
                </StyledMember>
                <StyledAttendanceList>
                  {attendance.map((week: number, weekIndex: number) => (
                    <StyledAttendanceBox key={weekIndex} editMode={isEditMode}>
                      {isEditMode ? (
                        <Dropdown
                          trigger={['click']}
                          overlay={AttendanceMenu(memberIndex, weekIndex)}
                          placement='bottomLeft'>
                          <div>
                            <StyledAttendanceState state={week}>
                              {drawAttendance(week)}
                            </StyledAttendanceState>
                          </div>
                        </Dropdown>
                      ) : (
                        <div>
                          <StyledAttendanceState state={week}>
                            {drawAttendance(week)}
                          </StyledAttendanceState>
                        </div>
                      )}
                    </StyledAttendanceBox>
                  ))}
                  <StyledDepositBox editMode={isEditMode}>
                    {course?.courseType === 1 ? deposit : ''}
                  </StyledDepositBox>
                </StyledAttendanceList>
              </StyledAttendanceContainer>
            );
          })}
        </StyledCourseMembersWrapper>
      </>
    </StyledLayout>
  );
};
