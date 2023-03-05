import styled from 'styled-components';

import { BLACK, GRAY, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledLayout = styled.div`
  overflow: auto;
  margin: 0 20px;
  @media (max-width: 800px) {
    margin: 0 10px;
  }
`;
export const StyledTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMenu = styled.div`
  font-size: 26px;
  margin: 35px 0 25px 29px;
  @media (max-width: 800px) {
    font-size: 16px;
    margin: 30px 0 10px 16px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 800px) {
    position: fixed;
    right: 10px;
    gap: 8px;
    margin-top: 20px;
  }
`;

export const StyledDropDown = styled.div`
  width: 160px;
  border-radius: 45px;
  border: 1.5px solid ${GRAY};
  height: fit-content;
  padding: 14px 30px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  @media (max-width: 800px) {
    margin: 0;
    font-size: 10px;
    width: 100px;
    padding: 5px 10px;
  }
  .ant-dropdown-trigger {
    span {
      margin-left: 20px;
      @media (max-width: 800px) {
        margin-left: 10px;
      }
    }
  }
  .ant-btn {
    &:hover,
    &:focus {
      color: ${RED};
      border-color: ${RED};
      i {
        border-color: ${RED};
      }
    }
  }
  @media (max-width: 800px) {
    order: 1;
  }
`;

export const StyledAttendanceButton = styled.button`
  font-family: 'sdBo';
  right: 0;
  top: 0;
  border-radius: 25px;
  background-color: ${BLACK};
  border: none;
  color: white;
  width: 170px;
  height: 50px;
  font-size: 18px;
  @media (max-width: 800px) {
    font-size: 10px;
    width: 80px;
    height: 26px;
  }
`;

export const StyledTitleWrapper = styled.div`
  font-family: 'sdLi';
  font-size: 16px;
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 43px;
  div {
    width: max-content;
  }
  @media (max-width: 800px) {
    font-size: 10px;
    margin-left: 20px;
    margin-top: 30px;
  }
`;

export const StyledUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  @media (max-width: 800px) {
    gap: 17px;
  }
`;

export const StyledWeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  margin-left: 110px;
  @media (max-width: 800px) {
    gap: 21px;
    margin-left: 35px;
  }
`;

export const StyledCourseMembersWrapper = styled.div`
  width: max-content;
  margin: 24px 0px;
  @media (max-width: 800px) {
    margin: 14px 0px;
  }
`;

export const StyledDeposit = styled.div`
  margin-left: 70px;
  @media (max-width: 800px) {
    margin-left: 30px;
  }
`;

export const StyledAttendanceContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px 18px;
  border: 2px solid ${LINE_GRAY};
  border-radius: 26px;
  margin-top: 12px;
  &:hover {
    box-shadow: 0px 0px 10px ${LINE_GRAY};
  }
  @media (max-width: 800px) {
    padding: 8px 10px;
    border-radius: 12px;
  }
`;

export const StyledMember = styled.div`
  display: flex;
  flex-basis: 190px;
  flex-shrink: 0;
  text-align: center;
  color: ${BLACK};
  gap: 24px;
  align-items: center;
  @media (max-width: 800px) {
    flex-basis: 110px;
    gap: 11px;
  }
`;

export const StyledEmojiBackground = styled.div`
  width: 58px;
  height: 58px;
  margin: 0 auto;
  font-size: 48px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    width: 35px;
    height: 35px;
    font-size: 30px;
  }
`;

export const StyledProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledMemberName = styled.div`
  font-size: 22px;
  font-family: 'sdBo';
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 800px) {
    font-size: 14px;
    gap: 5px;
  }
`;

export const StyledMemberType = styled.span`
  font-family: 'sdMe';
  font-size: 16px;
  color: ${RED};
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const StyledProfileLink = styled.div`
  font-family: 'sdLi';
  font-size: 14px;
  text-decoration: underline;
  text-decoration-thickness: calc(0.6px);
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledAttendanceList = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  gap: 52px;
  @media (max-width: 800px) {
    margin-left: 20px;
    gap: 25px;
  }
`;

export const StyledAttendanceBox = styled.div`
  font-family: 'sdSb';
  cursor: pointer;
  font-size: 18px;
  width: 32px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-dropdown-menu-item {
    text-align: center;
  }
  @media (max-width: 800px) {
    font-size: 10px;
    width: 18px;
    height: 12px;
  }
`;

export const StyledDepositBox = styled(StyledAttendanceBox)`
  cursor: auto;
  margin: 0 25px;
  @media (max-width: 800px) {
    margin: 0 15px;
  }
`;
