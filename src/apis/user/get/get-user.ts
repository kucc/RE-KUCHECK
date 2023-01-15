import { doc, getDoc } from 'firebase/firestore';

import { db } from '@config';

export const getUser = async (id: string) => {
  const docRef = doc(db, 'users', id);
  const docSnap = (await getDoc(docRef)).data();
  return {
    id: docRef.id,
    ...docSnap,
  } as User;
};
