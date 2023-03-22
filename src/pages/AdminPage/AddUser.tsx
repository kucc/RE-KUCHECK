import { useEffect, useState } from 'react';

import { Button, Select } from 'antd';
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc } from 'firebase/firestore';

import { db } from '@config';

const { Option } = Select;
export const AddUser = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [courseData, setCourseData] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState('');
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

  const onButtonClicked = async () => {
    const userDocRef = doc(db, 'users', selectedUser);
    const courseDocRef = doc(db, 'courses', selectedCourse);
    const selectedCourseData = (await getDoc(courseDocRef)).data() as any;

    await updateDoc(userDocRef, {
      courseHistory: arrayUnion({
        selectedCourseData,
        id: courseDocRef.id,
      }),
    });

    await updateDoc(courseDocRef, {
      courseAttendance: arrayUnion({
        attendance: [3, 3, 3, 3, 3, 3, 3, 3],
        id: userDocRef.id,
      }),
      courseMember: arrayUnion(userDocRef.id),
    });

    alert('성공!');
  };

  useEffect(() => {
    getAllUserData();
    getCourseData();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Select onChange={value => setSelectedUser(value)} style={{ width: '350px' }}>
        {userData.length > 0 &&
          userData.map((user, index) => (
            <Option key={index} value={user.id} style={{ fontSize: '11px' }}>
              {user.id + '/' + user.name}
            </Option>
          ))}
      </Select>
      {'  =>  '}
      <Select onChange={value => setSelectedCourse(value)} style={{ width: '350px' }}>
        {courseData.length > 0 &&
          courseData.map((course, index) => (
            <Option key={index} value={course.id} style={{ fontSize: '11px' }}>
              {course.id + '/' + course.name + '/' + course.semester}
            </Option>
          ))}
      </Select>
      <Button onClick={onButtonClicked}>GO!</Button>
    </div>
  );
};
