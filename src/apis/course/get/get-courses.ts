import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '@config';

export const getCourses = async (semester: string, callBackFunc: (courses: Course[]) => void) => {
  const q = query(collection(db, 'courses'), where('semester', '==', semester));

  const unsubscribe = onSnapshot(q, querySnapshot => {
    const result = [];
    for (const doc of querySnapshot.docs) {
      const docData = doc.data() as Course;

      result.push({ ...docData, id: doc.id });
    }

    callBackFunc(result);
  });

  return unsubscribe;
};
