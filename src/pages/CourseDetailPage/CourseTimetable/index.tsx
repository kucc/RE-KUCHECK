import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { CirclePicker } from 'react-color';
import 'react-table-drag-select/style.css';

import { TimeTable } from '@components/Timetable';

import { db } from '@config';
import { RED } from '@utility/COLORS';

import { StyledColorContainer, StyledTimeTable, StyledTimeTableContainer } from './style';
import { convertSelectedDataToTimetable } from './utils';

export const CourseTimetable = ({
  data,
  setCourseTimetable,
}: {
  data: Course;
  setCourseTimetable: Dispatch<SetStateAction<any>>;
}) => {
  const [cells, setCells] = useState<any>();

  // load timeTable info from firebase
  const fetchTimeTable = async () => {
    const docRef = doc(db, 'common', 'timeTable');
    const docData = (await getDoc(docRef)).data();
    setCells(docData);
  };

  useEffect(() => {
    fetchTimeTable();
  }, []);

  const [selectedColor, setSelectedColor] = useState(RED);

  return (
    <StyledTimeTableContainer>
      <StyledColorContainer>
        <ul>
          <li>동방을 사용하는 활동만 시간표 등록을 해주세요!</li>
          <li>최대한 다양한 색깔로 선택해주세요.</li>
          <li>
            시간표는 한번 등록시 수정이 어렵습니다. 만약 잘못 등록하셨다면,
            jjs01hwang@gmail(이희준)으로 메일이나 채널톡 주시면 해결해드리겠습니다!
          </li>
        </ul>
        <CirclePicker
          color={selectedColor}
          onChangeComplete={(color: any) => setSelectedColor(color.hex)}
        />
      </StyledColorContainer>
      <StyledTimeTable>
        <TimeTable
          cells={cells}
          editable={true}
          selectedData={(selectedData: any) => {
            const newCourseTimeTable = convertSelectedDataToTimetable(
              selectedData,
              selectedColor,
              data,
              cells,
            );
            setCourseTimetable(newCourseTimeTable);
          }}
          selectedColor={selectedColor}
        />
      </StyledTimeTable>
    </StyledTimeTableContainer>
  );
};
