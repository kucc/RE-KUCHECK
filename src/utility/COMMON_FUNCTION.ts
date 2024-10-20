export const PATH = {
  // 리뉴얼 페이지 PATH
  login: '/login', // 로그인
  signUp: '/signup', // 회원가입
  main: '/', // 메인
  courseCreate: '/course/create', // 활동 개설
  courseDetail: '/course/detail/:id', // 세션 소개
  attendance: '/attendance', // 출결 관리
  timeTable: '/timetable', // 동방 시간표
  profile: '/profile/:id', // 내 정보
  noticeAdmin: '/notice/admin', // 공지사항 작성 및 수정,
  notice: '/notice', // 공지사항
  admin: '/admin', // 관리자
};

export const SINGLEPATHNAMES_LIST = [PATH.login, PATH.signUp];

export const INCLUDE_HEADERPATH_LIST = [
  PATH.main,
  PATH.courseCreate,
  PATH.attendance,
  PATH.notice,
  PATH.admin,
];

export const MEMBER_ROLE = {
  MEMBER: '준회원',
  MANAGER: '관리자',
};

export const RandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export const renderWord = (courseType: number) => {
  if (courseType === 1) {
    return '세션';
  } else if (courseType === 2) {
    return '스터디';
  } else if (courseType === 3) {
    return '프로젝트';
  }
};

const emojis = [
  '🧕',
  '👮‍♀️',
  '👮',
  '👮‍♂️',
  '👷‍♀️',
  '👷',
  '👷‍♂️',
  '💂‍♀️',
  '💂',
  '💂‍♂️',
  '🕵️‍♀️',
  '🕵️',
  '🕵️‍♂️',
  '👩‍⚕️',
  '🧑',
  '👨‍⚕️',
  '👩‍🌾',
  '🧑',
  '👨‍🌾',
  '👩‍🍳',
  '🧑',
  '👨‍🍳',
  '👩‍🎓',
  '🧑',
  '👨‍🎓',
  '👩‍🎤',
  '🧑',
  '👨‍🎤',
  '👩‍🏫',
  '🧑',
  '👨‍🏫',
  '👩‍🏭',
  '🧑',
  '👨‍🏭',
  '👩‍💻',
  '🧑',
  '👨‍💻',
  '👩‍💼',
  '🧑',
  '👨‍💼',
  '👩‍🔧',
  '🧑',
  '👨‍🔧',
  '👩‍🔬',
  '🧑',
  '👨‍🔬',
  '👩‍🎨',
  '🧑',
  '👨‍🎨',
  '👩‍🚒',
  '🧑',
  '👨‍🚒',
  '👩‍✈️',
  '🧑',
  '👨‍✈️',
  '👩‍🚀',
  '🧑',
  '👨‍🚀',
  '👩‍⚖️',
  '🧑',
  '👨‍⚖️',
  '👰',
  '👰',
  '👰',
  '🤵',
  '🤵',
  '🤵',
  '👸',
  '🤴',
  '🥷',
  '🦸‍♀️',
  '🦸',
  '🦸‍♂️',
  '🦹‍♀️',
  '🦹',
  '🦹‍♂️',
  '🧙‍♀️',
  '🧙',
  '🧙‍♂️',
  '🧝‍♀️',
  '🧝',
  '🧝‍♂️',
  '🧛‍♀️',
  '🧛',
  '🧛‍♂️',
  '🧟‍♀️',
  '🧟',
  '🧟‍♂️',
  '🧞‍♀️',
  '🧞',
  '🧞‍♂️',
  '🧜‍♀️',
  '🧜',
  '🧜‍♂️',
  '🧚‍♀️',
  '🧚',
  '🧚‍♂️',
  '🙇‍♀️',
  '🙇',
  '🙇‍♂️',
  '💁‍♀️',
  '💁',
  '💁‍♂️',
  '🙅‍♀️',
  '🙅',
  '🙅‍♂️',
  '🙆‍♀️',
  '🙆',
  '🙆‍♂️',
  '🙋‍♀️',
  '🙋',
  '🙋‍♂️',
  '🤦‍♀️',
  '🤦',
  '🤦‍♂️',
  '🤷‍♀️',
  '🤷',
  '🤷‍♂️',
  '🙎‍♀️',
  '🙎',
  '🙎‍♂️',
  '🙍‍♀️',
  '🙍',
  '🙍‍♂️',
];
