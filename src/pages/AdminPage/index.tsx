import { useEffect, useState } from 'react';

import { Button } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import Input from 'antd/es/input/Input';
import { saveAs } from 'file-saver';
import { collection, doc, getDoc, getDocs, query, updateDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';

import { db } from '@config';
import { useGetProfile, useGetSemester, useRedirectToMain } from '@hooks';
import { ONLY_ADMIN } from '@utility/ALERT_MESSAGE';
import { RED } from '@utility/COLORS';

import { AddUser } from './AddUser';
import { StyledItem, StyledLayout, StyledSubTitle, StyledTitle } from './style';
import { handleTimeTableReset } from './utils';

export const AdminPage = () => {
  const { user } = useGetProfile();
  const history = useHistory();
  const [data, setData] = useState('');
  const [attendanceData, setAttendanceData] = useState<any>({});
  const [newSemester, setNewSemester] = useState<string>('');
  const { currentSemester, setCurrentSemester } = useGetSemester();

  useRedirectToMain();

  useEffect(() => {
    async function getCSVData() {
      const userObject: any = {};
      const attendanceObject: any = {};
      // userName - userId match object
      const q = query(collection(db, 'users'));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: any) => {
        userObject[doc.id] = doc.data().name;
      });

      let csv = '';

      const courseResult = await getDocs(query(collection(db, 'courses')));
      courseResult.forEach(doc => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (
          doc.data().courseType === 1 &&
          doc.id !== 'osfsJTMXKCORhqjsVX6s' &&
          doc.data().semester === currentSemester
        ) {
          csv += '\n';
          csv += `${doc.data().courseName},1주차,2주차,3주차,4주차,5주차,6주차,7주차,8주차`;
          csv += '\n';
          const attendanceArr = doc.data().courseAttendance;
          attendanceArr.map((user: any) => {
            const userName = userObject[user.id];
            csv += `${userName},`;
            let attendance = user.attendance.join(',');
            attendance = attendance.replace(/0/gi, '출석');
            attendance = attendance.replace(/1/gi, '지각');
            attendance = attendance.replace(/2/gi, '결석');
            // 미입력은 지각으로 처리??
            attendance = attendance.replace(/3/gi, '미입력');
            if (attendanceObject[userName]) {
              attendanceObject[userName].push(
                userName + ',' + doc.data().courseName + ',' + attendance,
              );
            } else {
              attendanceObject[userName] = [
                userName + ',' + doc.data().courseName + ',' + attendance,
              ];
            }
            csv += attendance;
            csv += '\n';
          });
        }
      });
      setData(csv);
      setAttendanceData(attendanceObject);
    }
    getCSVData();
  }, []);

  const handleMemberClick = () => {
    const keys = Object.keys(attendanceData);
    let memberData = '이름,세션,1주차,2주차,3주차,4주차,5주차,6주차,7주차,8주차\n';
    keys.map(key => {
      const arr = attendanceData[key];
      const courseNum = arr.length;
      const curretMemberStr = arr.join('\n');
      memberData += curretMemberStr;
      const absentNum = (curretMemberStr.match(/결석/g) || []).length;
      const lateNum = (curretMemberStr.match(/지각/g) || []).length;
      const nullNum = (curretMemberStr.match(/미입력/g) || []).length;
      const totalMoney =
        20000 * courseNum - 5000 * (absentNum + nullNum) - 3000 * lateNum > 0
          ? 20000 * courseNum - 5000 * (absentNum + nullNum) - 3000 * lateNum
          : 0;
      memberData += `\n총금액,세션수:${courseNum}, , , , , , , , ,${20000 * courseNum}`;
      memberData += `\n반환금액,세션수:${courseNum} / 결석:${absentNum} / 지각:${lateNum} / 미입력:${nullNum}, , , , , , , , ,${totalMoney}\n\n`;
    });
    saveAs(
      new Blob(['\uFEFF' + memberData], { type: 'text/csv;charset=utf-8' }),
      `${currentSemester}_kucc_attendance_member.csv`,
    );
  };

  const changeSemester = async () => {
    const regexp = new RegExp(/^\d{2}-[1-2]{1}$/);
    if (!regexp.test(newSemester)) {
      alert('형식에 맞춰 작성해주세요');
      return;
    }
    const docRef = doc(db, 'common', 'commonInfo');
    const docData = (await getDoc(docRef)).data();

    // currentSemester 업데이트
    await updateDoc(docRef, { currentSemester: newSemester });
    setCurrentSemester(newSemester);

    // pastSemester 업데이트
    if (docData?.pastSemester.includes(newSemester)) {
      return;
    } else {
      await updateDoc(docRef, { pastSemester: [...(docData?.pastSemester as []), newSemester] });
      console.log([...(docData?.pastSemester as []), newSemester]);
    }

    alert('변경되었습니다.');
  };

  useEffect(() => {
    if (user && user.role !== '관리자') {
      alert(ONLY_ADMIN);
      history.replace('/');
    }
  }, [user]);

  return (
    <StyledLayout>
      <StyledItem>
        <StyledTitle>
          1. 시간표 초기화하기
          <p style={{ color: RED, fontSize: '13px', marginTop: '2px' }}>
            누르면 바로 초기화되니 주의하세요.
          </p>
        </StyledTitle>
        <Button onClick={handleTimeTableReset} style={{ maxWidth: '150px' }} size='large'>
          초기화!
        </Button>
      </StyledItem>

      <StyledItem>
        <StyledTitle>2. 엑셀 추출</StyledTitle>
        <ButtonGroup size='large'>
          <Button
            onClick={() =>
              saveAs(
                new Blob(['\uFEFF' + data], {
                  type: 'text/csv;charset=utf-8',
                }),
                `${currentSemester}_kucc_attendance_session.csv`,
              )
            }>
            세션별
          </Button>
          <Button onClick={handleMemberClick}>멤버별</Button>
        </ButtonGroup>
      </StyledItem>

      <StyledItem>
        <StyledTitle>3. 강의 넣어주기</StyledTitle>
        <AddUser />
      </StyledItem>

      <StyledItem>
        <StyledTitle>4. 새학기 등록</StyledTitle>

        <StyledSubTitle>현재 학기: {currentSemester}</StyledSubTitle>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <StyledSubTitle>바꿀 학기:</StyledSubTitle>
          <span style={{ display: 'flex', gap: '5px' }}>
            <Input
              style={{ maxWidth: '200px' }}
              type='text'
              placeholder={currentSemester || ''}
              value={newSemester}
              onChange={e => setNewSemester(e.target.value)}
            />
            <Button onClick={changeSemester} type='primary'>
              변경
            </Button>
          </span>
        </div>
      </StyledItem>
    </StyledLayout>
  );
};
