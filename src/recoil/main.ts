import { atom } from 'recoil';

export const searchQueryState = atom<string>({
  key: 'searchQueryState',
  default: '',
});

export const searchLanguageState = atom<null | Language>({
  key: 'searchLanguageState',
  default: null,
});

export const currentSemesterState = atom<string | null>({
  key: 'currentSemesterState',
  default: null,
});

export const courseTypeTabState = atom<number>({
  key: 'courseTypeTabState',
  default: 0,
})

export const sortCourseState = atom<string | null>({
  key: 'sortCourseState',
  default: null,
});