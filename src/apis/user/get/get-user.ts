import { QueryFunctionContext } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '@config';

// export const getUser = async (id: string) => {
//   const docRef = doc(db, 'users', id);
//   const docSnap = (await getDoc(docRef)).data();
//   return {
//     id: docRef.id,
//     ...docSnap,
//   } as User;
// };

export const getUser = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<User> => {
  const [, id] = queryKey;
  const docRef = doc(db, 'users', id);
  const docSnap = (await getDoc(docRef)).data() as User;
  const courseHistory = docSnap.courseHistory ?? [];
  if (courseHistory.length > 0) {
    await Promise.all(
      courseHistory.map(async (course, i) => {
        if (course.courseLeader.emoji === undefined) {
          const leader_id = course.courseLeader.id;
          const docRef2 = doc(db, 'users', leader_id);
          const docSnap2 = (await getDoc(docRef2)).data() as User;
          course.courseLeader.emoji = docSnap2.emoji;
          console.log(course.courseLeader.emoji);
        }
      }),
    );
  }
  return { ...docSnap, id };
};
