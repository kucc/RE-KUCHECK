import { atom } from 'recoil';

export const courseTypeState = atom<string>({
  key: 'courseTypeState',
  default: '세션 / 스터디 / 프로젝트',
});

export const courseDifficultyState = atom<string>({
  key: 'courseDifficultyState',
  default: '난이도',
});

export const courseRequireTimeState = atom<string>({
  key: 'courseRequireTime',
  default: '투자시간',
});

export const selectedLanguagesState = atom<[] | Language[]>({
  key: 'selectedLanguagesState',
  default: [],
});