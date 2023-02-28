import { useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { useRecoilState } from 'recoil';

import { db } from '@config/firebase';
import { currentSemesterState } from '@recoil';

export const useGetSemester = () => {
  const [currentSemester, setCurrentSemester] = useRecoilState(currentSemesterState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentSemester = async () => {
    const docRef = doc(db, 'common', 'commonInfo');
    const docData = (await getDoc(docRef)).data();
    setCurrentSemester(docData?.currentSemester ?? '');
  };

  useEffect(() => {
    if (!currentSemester) {
      getCurrentSemester();
    }
  }, [currentSemester, getCurrentSemester, setCurrentSemester]);

  return { currentSemester, setCurrentSemester };
};
