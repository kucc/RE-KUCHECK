import { useEffect, useState } from 'react';

import { doc, onSnapshot } from 'firebase/firestore';

import { db } from '@config';

const convertTimestampToDate = (time: any) => {
  if (!time) return time;
  let result = time;
  if (typeof time.toDate === 'function') {
    result = time.toDate();
  }
  return result as Date;
};

const checkBetweenDate = (date1: Date, date2: Date) => {
  if (convertTimestampToDate(date1) <= new Date() && new Date() <= convertTimestampToDate(date2)) {
    return true;
  } else {
    return false;
  }
};

export const useGetEnrollmentTerm = () => {
  const [isEnrollmentTerm, setIsEnrollmentTerm] = useState(false);

  const getData = async () => {
    const unsubscribe = onSnapshot(doc(db, 'common', 'commonInfo'), doc => {
      const { enrollmentTerm } = doc.data() as any;
      if (checkBetweenDate(enrollmentTerm.start, enrollmentTerm.end)) {
        setIsEnrollmentTerm(true);
      } else {
        setIsEnrollmentTerm(false);
      }
    });

    return () => {
      unsubscribe();
    };
  };

  useEffect(() => {
    getData();
  }, []);

  return { isEnrollmentTerm };
};
