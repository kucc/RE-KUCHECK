import { QueryFunctionContext } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@config';

export const getCourses = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<Course[]> => {
  const [, semester] = queryKey;

  const q = query(collection(db, 'courses'), where('semester', '==', semester));

  const academySnapshot = await getDocs(q);
  const academyList = academySnapshot.docs.map(doc => doc.data() as Course);

  return academyList;
};
