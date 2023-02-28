import {
  StyledAttendanceButton,
  StyledCourseMembersWrapper,
  StyledMenu,
  StyledTitleWrapper,
  StyledUserWrapper,
  StyledWeekWrapper,
} from './style';

export const AttendancePage = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <StyledMenu>출결관리</StyledMenu>
        <StyledAttendanceButton>수정하기</StyledAttendanceButton>
      </div>
      <StyledTitleWrapper>
        <StyledUserWrapper>
          <div>이모지</div>
          <div>이름 / 역할</div>
        </StyledUserWrapper>
        <StyledWeekWrapper>
          <div>1주차</div>
          <div>2주차</div>
          <div>3주차</div>
          <div>4주차</div>
          <div>5주차</div>
          <div>6주차</div>
          <div>7주차</div>
          <div>8주차</div>
        </StyledWeekWrapper>
        <div style={{ marginLeft: '70px', width: 'max-content' }}>보증금</div>
      </StyledTitleWrapper>
      <StyledCourseMembersWrapper>{/* 여기에 member 컴포넌트......? */}</StyledCourseMembersWrapper>
    </>
  );
};
