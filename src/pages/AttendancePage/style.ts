import styled from 'styled-components';

import { BLACK, GRAY, RED } from '@utility/COLORS';

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
  margin: 24 20px;
  @media (max-width: 800px) {
    margin: 14px 10px;
  }
`;
