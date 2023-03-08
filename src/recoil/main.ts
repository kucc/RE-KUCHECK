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
