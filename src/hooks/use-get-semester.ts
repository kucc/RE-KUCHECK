import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { useRecoilState } from 'recoil';

import { db } from '@config/firebase';
import { currentSemesterState, checkedSemesterState } from '@recoil';

export const useGetSemester = () => {
  const [currentSemester, setCurrentSemester] = useRecoilState(currentSemesterState);
  const [checkedSemester, setCheckedSemester] = useRecoilState(checkedSemesterState);
  const [allSemesters, setallSemesters] = useState<string[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentSemester = async () => {
    const docRef = doc(db, 'common', 'commonInfo');
    const docData = (await getDoc(docRef)).data();
    setCurrentSemester(docData?.currentSemester ?? '');
  };

  const getCheckedSemester = async () => {
    const docRef = doc(db, 'common', 'commonInfo');
    const docData = (await getDoc(docRef)).data();
    setCheckedSemester(docData?.currentSemester ?? '');
  };

  const getPastSemester = async () => {
    const docRef = doc(db, 'common', 'commonInfo');
    const docData = (await getDoc(docRef)).data();
    setallSemesters(docData?.pastSemester ? docData?.pastSemester.reverse() : []);
  };

  useEffect(() => {
    getCurrentSemester();
    if (!checkedSemester) {
      getCheckedSemester();
    }
  }, [currentSemester, checkedSemester, getCheckedSemester, setCheckedSemester]);

  useEffect(() => {
    getPastSemester();
  }, []);

  return { currentSemester, setCurrentSemester, checkedSemester, setCheckedSemester, allSemesters };
};
