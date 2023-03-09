import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { CirclePicker } from 'react-color';
import 'react-table-drag-select/style.css';

import { TimeTable } from '@components/Timetable';

import { db } from '@config';
import { RED } from '@utility/COLORS';

import { StyledSelect, StyledTitle } from '../style';
import { StyledColorContainer, StyledTimeTable, StyledTimeTableContainer } from './style';
import { convertSelectedDataToTimetable } from './utils';

const timeList = [
  'time_9_00',
  'time_9_30',
  'time_10_00',
  'time_10_30',
  'time_11_00',
  'time_11_30',
  'time_12_00',
  'time_12_30',
  'time_13_00',
  'time_13_30',
  'time_14_00',
  'time_14_30',
  'time_15_00',
  'time_15_30',
  'time_16_00',
  'time_16_30',
  'time_17_00',
  'time_17_30',
  'time_18_00',
  'time_18_30',
  'time_19_00',
  'time_19_30',
  'time_20_00',
  'time_20_30',
  'time_21_00',
  'time_21_30',
  'time_22_00',
  'time_22_30',
];

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
    const docData = (await getDoc(docRef)).data() as any;
    setCells(docData);
  };

  const onClickReset = () => {
    const newCells = { ...cells };

    timeList.map(time => {
      newCells[time] = newCells[time].map((cell: any) => {
        if (cell.courseId === data.id) {
          return {
            color: '',
            courseId: '',
            value: '',
          };
        } else {
          return cell;
        }
      });
    });

    setCourseTimetable({ ...newCells });
    setCells({ ...newCells });
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
          <li>시간표 수정을 원하실 경우 초기화 버튼을 누르고, 다시 입력하시면 됩니다.</li>
          <li>
            시간표에서 해당 수업 정보를 없애고 싶으신 경우, 초기화를 누르고 수정 완료 버튼을 누르면
            됩니다.
          </li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CirclePicker
            color={selectedColor}
            onChangeComplete={(color: any) => setSelectedColor(color.hex)}
          />
          <StyledSelect selected={false} style={{ height: 'fit-content' }} onClick={onClickReset}>
            <StyledTitle>초기화</StyledTitle>
          </StyledSelect>
        </div>
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
