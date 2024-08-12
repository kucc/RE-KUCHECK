import { useEffect, useState } from 'react';

import { DoubleRightOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc } from 'firebase/firestore';

import { db } from '@config';
import { RED, WHITE } from '@utility/COLORS';


const { Option } = Select;
export const AddUser = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [courseData, setCourseData] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  const getAllUserData = async () => {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    const newUserData: any[] = [];
    querySnapshot.forEach((user: any) => {
      newUserData.push({ id: user.id, name: user.data().name });
    });
    setUserData(newUserData);
  };

  const getCourseData = async () => {
    const q = query(collection(db, 'courses'));
    const querySnapshot = await getDocs(q);
    const newCourseData: any[] = [];
    querySnapshot.forEach(course => {
      newCourseData.push({
        id: course.id,
        name: course.data().courseName,
        semester: course.data().semester,
      });
    });
    setCourseData(newCourseData);
  };

  const onButtonClicked = () => {
    selectedUser.forEach(async user => {
      const userId = user.split('/')[1];

      const userDocRef = doc(db, 'users', userId);
      const courseDocRef = doc(db, 'courses', selectedCourse);
      const selectedCourseData = (await getDoc(courseDocRef)).data() as any;

      await updateDoc(userDocRef, {
        courseHistory: arrayUnion({
          courseInfo: selectedCourseData.courseInfo,
          courseLeader: selectedCourseData.courseLeader,
          courseName: selectedCourseData.courseName,
          courseType: selectedCourseData.courseType,
          difficulty: selectedCourseData.difficulty,
          id: courseDocRef.id,
          language: selectedCourseData.language,
          requireTime: selectedCourseData.requireTime,
          semester: selectedCourseData.semester,
        }),
      });

      await updateDoc(courseDocRef, {
        courseAttendance: arrayUnion({
          attendance: [3, 3, 3, 3, 3, 3, 3, 3],
          id: userDocRef.id,
        }),
        courseMember: arrayUnion(userDocRef.id),
      });
    });

    alert('성공!');
  };

  useEffect(() => {
    getAllUserData();
    getCourseData();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Select
        mode='multiple'
        placeholder='수강생을 선택해주세요.'
        onChange={value => {
          setSelectedUser(value);
        }}
        style={{ width: '350px' }}>
        {userData.length > 0 &&
          userData.map((user, index) => (
            <Option key={index} value={`${user.name}/${user.id}`} style={{ fontSize: '11px' }}>
              <strong>{user.name}</strong>/<span>{user.id}</span>
            </Option>
          ))}
      </Select>

      <DoubleRightOutlined />
      <Select
        placeholder='세션을 선택해주세요.'
        onChange={value => setSelectedCourse(value)}
        style={{ width: '350px' }}>
        {courseData.length > 0 &&
          courseData.map((course, index) => (
            <Option key={index} value={course.id} style={{ fontSize: '11px' }}>
              {course.id + '/' + course.name + '/' + course.semester}
            </Option>
          ))}
      </Select>
      <Button
        onClick={onButtonClicked}
        style={{
          backgroundColor: selectedCourse && selectedUser && RED,
          color: selectedCourse && selectedUser && WHITE,
        }}>
        GO!
      </Button>
    </div>
  );
};
