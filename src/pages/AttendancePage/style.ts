import styled from 'styled-components';

import { BLACK, GRAY, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledMenu = styled.div`
  font-size: 26px;
  margin: 35px 0 25px 49px;
  @media (max-width: 800px) {
    font-size: 16px;
    margin: 30px 0 10px 26px;
  }
`;

export const StyledDropDown = styled.div`
  width: 160px;
  border-radius: 45px;
  border: 1.5px solid ${GRAY};
  height: fit-content;
  padding: 14px 30px;
  @media (max-width: 800px) {
    font-size: 10px;
    width: 120px;
    padding: 5px 10px;
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

export const StyledButtonWrapper = styled.div`
  position: absolute;
  margin-right: 18px;
  display: flex;
  position: absolute;
  margin-right: 18px;
  flex-direction: row;
  gap: 16px;
  width: 400px;
`;

export const StyledAttendanceButton = styled.button`
  font-family: 'sdBo';
  margin-right: 18px;
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
  margin-left: 60px;
  margin-top: 43px;
  overflow: auto;
  div {
    width: max-content;
  }
  @media (max-width: 800px) {
    font-size: 10px;
    margin-left: 30px;
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
  margin-left: 120px;
  @media (max-width: 800px) {
    gap: 21px;
    margin-left: 45px;
  }
`;

export const StyledCourseMembersWrapper = styled.div`
  margin: 24px 20px;
  @media (max-width: 800px) {
    margin: 14px 10px;
  }
`;

export const StyledMainCourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px 15px;
  border: 2px solid ${LINE_GRAY};
  border-radius: 26px;
  margin-top: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px ${LINE_GRAY};
  }
  @media (max-width: 800px) {
    padding: 16px 18px;
    border-radius: 12px;
  }
`;

export const StyledLeader = styled.div`
  display: flex;
  flex-basis: 190px;
  flex-shrink: 0;
  text-align: center;
  color: ${BLACK};
  gap: 24px;
  @media (max-width: 800px) {
    flex-basis: 100px;
    gap: 11px;
  }
`;

export const StyledEmojiBackground = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
`;

export const StyledEmoji = styled.span`
  font-size: 48px;
  position: absolute;
  top: -7px;
  left: 4px;
  @media (max-width: 800px) {
    font-size: 30px;
    left: 2px;
  }
`;

export const StyledProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledLeaderName = styled.div`
  font-size: 22px;
  font-family: 'sdBo';
  margin-top: 2px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const StyledLeaderType = styled.span`
  font-family: 'sdMe';
  font-size: 16px;
  color: ${RED};
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;
