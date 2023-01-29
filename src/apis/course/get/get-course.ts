import { QueryFunctionContext } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '@config';

export const getCourse = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<Course> => {
  const [, id] = queryKey;
  const docRef = doc(db, 'courses', id);
  const docSnap = (await getDoc(docRef)).data() as Course;
  if (docSnap.courseLeader.emoji === undefined) {
    const user_id = docSnap.courseLeader.id;
    const docRef2 = doc(db, 'users', user_id);
    const docSnap2 = (await getDoc(docRef2)).data() as User;
    docSnap.courseLeader.comment = docSnap2.comment;
    docSnap.courseLeader.emoji = docSnap2.emoji;
  }

  return docSnap;
};
