// redux message
export const INIT = 'INIT'; // 진입
export const SUCCESS = 'SUCCESS'; // 성공
export const FAILURE = 'FAILURE'; // 실패

// success message
export const SUCCESS_APPLICATION = '등록에 성공하였습니다!';
export const SUCCESS_APPLIED_COURSE = '신청이 완료되었습니다!';
export const ATTENDANCE_SUCCESS = '출결 수정이 완료되었습니다!';
export const PROFILE_EDIT_SUCCESS = '프로필 정보 수정이 완료되었습니다!';
export const SUCCESS_DELETE_COURSE = '강의가 삭제되었습니다.';
export const SUCCESS_DROP_COURSE = '강의가 취소되었습니다.';
export const SUCCESS_REGISTER_COURSE = '활동개설에 성공했습니다!';


// error message
export const INVALID_PASSWORD = '유효하지 않은 패스워드입니다.';
export const PASSWORD_DOSE_NOT_MATCH = '비밀번호가 일치하지 않았습니다.';
export const CAN_NOT_CREATE_USER_IN_FIREBASE =
  '이미 가입된 이메일이거나 비밀번호가 올바르지 않습니다.';
export const ALREADY_LOGGED_IN = '이미 로그인된 상태입니다.';
export const FORM_IS_NOT_FULL = '양식을 전부 다 입력해주세요!';
export const CHECK_TOP_SESSION_OR_STUDY = '상단의 세션 혹은 스터디를 선택했는지 확인해주세요!';
export const ALREADY_APPLIED_COURSE = '이미 신청한 과목입니다.';
export const NOT_ENROLLMENT_TERM = '수강 신청 기간이 아닙니다.';
export const NOT_REGISTER_TERM = '활동 등록 기간이 아닙니다.';

export const NEED_TO_LOGIN = '로그인이 필요합니다.';
export const COURSE_LEADER_ONLY = '세션장 혹은 스터디장만이 접근할 수 있습니다.';
export const COURSE_CHECK_ADMIN_ONLY = '출석체크 담당자만이 접근할 수 있습니다.';
export const FAILED_TO_LOAD_DATA = '정보를 가져오는데 실패했습니다.';
export const FAILED_TO_APPLY_COURSE = '신청에 실패했습니다.';
export const FALIED_TO_DROP_COURSE = '취소에 실패했습니다.';
export const COMMON_ALERT = '관리자에게 문의해주세요.';
export const ERROR_ALERT = '에러가 발생하였습니다.';
export const COURSE_MEMBER_ALREADY_FULLED = '수강 인원이 초과하여 마감되었습니다.';
export const USER_NOT_FOUND = '가입되지 않은 사용자입니다.\n회원가입 페이지로 이동합니다.';
export const LOGIN_FAILURE = '로그인에 실패했습니다.';
export const EXISTING_EMAIL = '이미 가입된 이메일입니다.\n로그인 페이지로 이동합니다.';
export const SIGNUP_FAILURE = '회원가입에 실패했습니다.';
export const SIGNUP_SUCCESS = '회원가입을 완료하였습니다.';