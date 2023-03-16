import { atom } from 'recoil';

export const selectedCourseState = atom<number>({
  key: 'selectedCourseState',
  default: 0,
});
