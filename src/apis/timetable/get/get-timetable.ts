import { doc, getDoc } from 'firebase/firestore';

import { db } from '@config';

export const getTimetable = async () => {
  const docRef = doc(db, 'common', 'timeTable');
  return (await getDoc(docRef)).data();
};
