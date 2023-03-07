import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';

import { Loading } from '@components/Loading';
import { TimeTable } from '@components/Timetable';

import { db } from '@config';
import { StyledCommonTitle } from '@utility/COMMON_STYLE';

export const TimeTablePage = () => {
  const [cells, setCells] = useState<any>(null);

  // load timeTable info from firebase
  const fetchTimeTable = async () => {
    const docRef = doc(db, 'common', 'timeTable');
    const docData = (await getDoc(docRef)).data();
    setCells(docData);
  };

  useEffect(() => {
    fetchTimeTable();
  }, []);
  if (cells === null) return <Loading />;

  return (
    <div>
      <StyledCommonTitle>시간표</StyledCommonTitle>
      <TimeTable cells={cells} editable={false} />
    </div>
  );
};
