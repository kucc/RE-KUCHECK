import { doc, setDoc } from 'firebase/firestore';

import { db } from '@config';

const defaultArray = [
  { color: '', courseId: '', value: '' },
  { color: '', courseId: '', value: '' },
  { color: '', courseId: '', value: '' },
  { color: '', courseId: '', value: '' },
  { color: '', courseId: '', value: '' },
  { color: '', courseId: '', value: '' },
  { color: '', courseId: '', value: '' },
];

export const handleTimeTableReset = async () => {
  const timeTable = {
    time_9_00: defaultArray,
    time_9_30: defaultArray,
    time_10_00: defaultArray,
    time_10_30: defaultArray,
    time_11_00: defaultArray,
    time_11_30: defaultArray,
    time_12_00: defaultArray,
    time_12_30: defaultArray,
    time_13_00: defaultArray,
    time_13_30: defaultArray,
    time_14_00: defaultArray,
    time_14_30: defaultArray,
    time_15_00: defaultArray,
    time_15_30: defaultArray,
    time_16_00: defaultArray,
    time_16_30: defaultArray,
    time_17_00: defaultArray,
    time_17_30: defaultArray,
    time_18_00: defaultArray,
    time_18_30: defaultArray,
    time_19_00: defaultArray,
    time_19_30: defaultArray,
    time_20_00: defaultArray,
    time_20_30: defaultArray,
    time_21_00: defaultArray,
    time_21_30: defaultArray,
    time_22_00: defaultArray,
    time_22_30: defaultArray,
  };

  await setDoc(doc(db, 'common', 'timeTable'), timeTable);
  alert('초기화를 완료하였습니다!');
};
