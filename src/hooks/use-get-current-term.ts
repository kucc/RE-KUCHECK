import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';

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

export const useGetCurrentTerm = () => {
  const [resultText, setResultText] = useState<string>('');

  const [isEnrollmentTerm, setIsEnrollmentTerm] = useState(false);

  console.log('isEnrollmentTerm', isEnrollmentTerm);

  const fetchTerm = async () => {
    const commonInfoRef = doc(db, 'common', 'commonInfo');
    const weekInfoRef = doc(db, 'common', 'weekInfo');
    const commonInfoData = (await getDoc(commonInfoRef)).data();
    const weekInfoData = (await getDoc(weekInfoRef)).data();

    if (commonInfoData && weekInfoData) {
      const { registerTerm, activeTerm, enrollmentTerm } = commonInfoData as any;
      const {
        firstWeek,
        secondWeek,
        thirdWeek,
        fourthWeek,
        fifthWeek,
        sixthWeek,
        seventhWeek,
        eighthWeek,
      } = weekInfoData as any;

      if (checkBetweenDate(enrollmentTerm.start, enrollmentTerm.end)) {
        setIsEnrollmentTerm(true);
      }

      if (checkBetweenDate(registerTerm.start, registerTerm.end)) {
        setResultText('등록 기간');
      } else if (checkBetweenDate(enrollmentTerm.start, enrollmentTerm.end)) {
        setResultText('수강신청 기간');
      } else if (checkBetweenDate(firstWeek.start, firstWeek.end)) {
        setResultText('1주차');
      } else if (checkBetweenDate(secondWeek.start, secondWeek.end)) {
        setResultText('2주차');
      } else if (checkBetweenDate(thirdWeek.start, thirdWeek.end)) {
        setResultText('3주차');
      } else if (checkBetweenDate(fourthWeek.start, fourthWeek.end)) {
        setResultText('4주차');
      } else if (checkBetweenDate(fifthWeek.start, fifthWeek.end)) {
        setResultText('5주차');
      } else if (checkBetweenDate(sixthWeek.start, sixthWeek.end)) {
        setResultText('6주차');
      } else if (checkBetweenDate(seventhWeek.start, seventhWeek.end)) {
        setResultText('7주차');
      } else if (checkBetweenDate(eighthWeek.start, eighthWeek.end)) {
        setResultText('8주차');
      } else if (checkBetweenDate(activeTerm.start, activeTerm.end)) {
        setResultText('활동 기간');
      } else {
        setResultText('휴식 기간');
      }
    }
  };

  useEffect(() => {
    fetchTerm();
  }, []);

  return {
    resultText,
    isEnrollmentTerm,
  };
};
