import { atom } from 'recoil';

export const courseTabState = atom<'past' | 'now'>({
  key: 'courseTabState',
  default: 'now',
});