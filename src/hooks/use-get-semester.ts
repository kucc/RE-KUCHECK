import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { useRecoilState } from 'recoil';

import { db } from '@config/firebase';
import { checkedSemesterState, currentSemesterState } from '@recoil';

export const useGetSemester = () => {
  const [currentSemester, setCurrentSemester] = useRecoilState(currentSemesterState);
  const [checkedSemester, setCheckedSemester] = useRecoilState(checkedSemesterState);
  const [allSemesters, setAllSemesters] = useState<string[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentSemester = async () => {
    const docRef = doc(db, 'common', 'commonInfo');
    const docData = (await getDoc(docRef)).data();
    setCurrentSemester(docData?.currentSemester ?? '');
  };

  const getAllSemesters = async () => {
    const docRef = doc(db, 'common', 'commonInfo');
    const docData = (await getDoc(docRef)).data();
    setAllSemesters(docData?.pastSemester ? docData?.pastSemester.reverse() : []);
  };

  useEffect(() => {
    getCurrentSemester();
    getAllSemesters();
    if (!checkedSemester) {
      setCheckedSemester(currentSemester);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSemester]);

  return { currentSemester, setCurrentSemester, checkedSemester, setCheckedSemester, allSemesters };
};
