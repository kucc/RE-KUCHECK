import {
  ATTENDANCE_FINE,
  ATTENDANCE_STATE_NUMBER,
  DEPOSIT_REFUND_LIMIT,
  INIT_DEPOSIT,
} from '@utility/CONSTANTS';

export const modifyArray = (array: any[], index: number, value: any) => {
  return [...array.slice(0, index), value, ...array.slice(index + 1, array.length + 1)];
};

const { LATE, ABSENT, EXCUSED_ABSENT } = ATTENDANCE_STATE_NUMBER;

// 출석 0 지각 1 결석 2 기본 3 유고결석 4
export const calculateDeposit = (array: (0 | 1 | 2 | 3 | 4)[]) => {
  const stateList = [0, 0, 0, 0, 0];
  let totalDeposit = INIT_DEPOSIT;
  for (const state of array) {
    stateList[state] += 1;
  }
  if (stateList[ABSENT] + stateList[EXCUSED_ABSENT] >= DEPOSIT_REFUND_LIMIT) {
    totalDeposit = 0;
  } else {
    totalDeposit += (stateList[LATE] + stateList[EXCUSED_ABSENT]) * -ATTENDANCE_FINE.LATE;
    totalDeposit += stateList[ABSENT] * -ATTENDANCE_FINE.ABSENT;
  }
  return totalDeposit;
};
