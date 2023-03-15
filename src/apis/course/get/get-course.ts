import { QueryFunctionContext } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '@config';

export const getCourse = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<Course> => {
  const [, id] = queryKey;
  const docRef = doc(db, 'courses', id);
  const docSnap = (await getDoc(docRef)).data() as Course;

  return { ...docSnap, id };
};
