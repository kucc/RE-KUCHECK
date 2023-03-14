import styled from 'styled-components';

import { BLACK, LINE_GRAY, RED, WHITE, YELLOW } from '@utility/COLORS';

export const StyledUserInfoContainer = styled.div`
  display: flex;
  height: 158px;
  align-items: center;
  padding: 0 28px;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    height: auto;
    flex-direction: column;
    text-align: center;
    padding: 0;
    margin-bottom: 20px;
    gap: 12px;
  }
`;

export const StyledUserEmoji = styled.div`
  font-size: 120px;
  @media (max-width: 800px) {
    font-size: 70px;
  }
`;

export const StyledUserContainer = styled.div`
  width: 100%;
  margin-left: 35px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledName = styled.div`
  font-family: 'tmoneyBo';
  font-size: 24px;
  line-height: 32px;
  color: ${BLACK};
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledUserRole = styled.span`
  font-size: 18px;
  font-family: 'sdSb';
  color: ${RED};
  vertical-align: middle;
  margin-left: 10px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const StyledComment = styled.div`
  font-family: 'sdMe';
  font-size: 16px;
  margin: 10px 0 16px 0;
  @media (max-width: 800px) {
    font-size: 10px;
    margin: 10px 0 12.5px 0;
  }
`;

export const StyledSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  justify-content: flex-start;
  @media (max-width: 800px) {
    gap: 16px;
    justify-content: center;
  }
`;

export const StyledSocialBox = styled.span`
  display: flex;
  flex-direction: row;
  gap: 8px;
  img {
    width: 15px;
    @media (max-width: 800px) {
      width: 10px;
    }
  }
  @media (max-width: 800px) {
    gap: 4.5px;
  }
`;

export const StyledSocialLink = styled.a`
  font-family: 'sdLi';
  font-size: 14px;
  color: ${BLACK};
  text-decoration: underline;
  text-underline-position: under;
  @media (max-width: 800px) {
    font-size: 8px;
  }
`;

export const StyledModifyButton = styled.button`
  font-family: 'sdBo';
  border-radius: 25px;
  background-color: ${BLACK};
  border: none;
  color: white;
`;

export const StyledPcModifyButton = styled(StyledModifyButton)`
  width: 170px;
  height: 50px;
  font-size: 18px;
  flex-shrink: 0;
  margin-left: auto;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledMobileModifyButton = styled(StyledModifyButton)`
  display: none;
  width: 98px;
  height: 29px;
  font-size: 10px;
  @media (max-width: 800px) {
    display: block;
    margin: 12px auto 0 auto;
  }
`;

const StyledTextBox = styled.pre`
  border: 1.5px solid ${LINE_GRAY};
  border-radius: 18px;
  @media (max-width: 800px) {
    border: 0.8px solid ${LINE_GRAY};
  }
`;

export const StyledUserDetailComment = styled(StyledTextBox)`
  padding: 25px 44px;
  font-family: 'sdLi';
  font-size: 16px;
  @media (max-width: 800px) {
    padding: 14px 30px;
    font-size: 10px;
    text-align: center;
  }
`;

export const StyledCourseContainer = styled.div`
  margin: 60px 0 82px 0;
  @media (max-width: 800px) {
    margin: 42px 0 86px 0;
  }
`;

export const StyledCourseTab = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: ${LINE_GRAY};
  margin-left: 18px;
  @media (max-width: 800px) {
    gap: 12px;
  }
`;

export const StyledTabRightLine = styled.hr`
  height: 25px;
  width: 1.5px;
  background-color: ${LINE_GRAY};
  border: 0;
  @media (max-width: 800px) {
    width: 0.7px;
    height: 15px;
  }
`;

export const StyledTab = styled.span`
  cursor: pointer;
  font-family: 'sdBo';
  font-size: 18px;
  text-align: center;
  width: 83px;
  @media (max-width: 800px) {
    width: 56px;
    font-size: 12px;
  }
`;

export const StyledTabText = styled.span`
  color: ${({ active }: { active: boolean }) => (active === true ? BLACK : LINE_GRAY)};
`;

export const StyledTabLine = styled.hr`
  height: 4px;
  width: 83px;
  margin-top: 11px;
  background-color: ${BLACK};
  border: 0;
  border-radius: 3px;
  @media (max-width: 800px) {
    height: 2px;
    width: 56px;
    margin-top: 9px;
  }
`;

export const StyledLine = styled.hr`
  height: 1px;
  width: 100%;
  margin-top: 2px;
  background-color: ${LINE_GRAY};
  border: 0;
  border-radius: 3px;
  @media (max-width: 800px) {
    height: 0.5px;
  }
`;
export const StyledMainCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 22px;
  @media (max-width: 800px) {
    gap: 8px;
    margin-top: 12px;
  }
`;

export const StyledMainCourse = styled(StyledTextBox)`
  height: auto;
  cursor: pointer;
  padding: 18px 28px 26px 37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    padding: 15px 18px;
    position: relative;
  }
`;

export const StyledCourseProfile = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  gap: 5px;
  @media (max-width: 800px) {
    width: 50px;
    gap: 3px;
  }
`;

export const StyledCourseProfileImg = styled.span`
  position: relative;
  width: 60px;
  height: 64px;
  @media (max-width: 800px) {
    width: 48px;
    height: 52px;
  }
`;

export const StyledCourseProfileCircle = styled.span`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${YELLOW};
  position: absolute;
  z-index: -1;
  @media (max-width: 800px) {
    width: 48px;
    height: 48px;
  }
`;

export const StyledCourseProfileEmoji = styled.span`
  position: absolute;
  font-size: 42px;
  bottom: 0;
  left: 50%;
  transform: translate(-49%, 0);
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;

export const StyledCourseProfileName = styled.span`
  font-family: 'sdBo';
  font-size: 14px;
  span {
    font-family: 'sdLi';
  }
  @media (max-width: 800px) {
    font-size: 8px;
  }
`;

export const StyledCourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 800px) {
    margin-left: 9.75px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const StyledStackTitle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 6px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2.4px;
  }
`;

export const StyledStackWrapper = styled.span`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledStackImg = styled.img`
  width: 27px;
  height: 27px;
  @media (max-width: 800px) {
    width: 17px;
    height: 17px;
  }
`;

export const StyledRegisterButton = styled(StyledModifyButton)`
  background-color: ${WHITE};
  color: ${RED};
  border: solid 1px ${RED};
  width: 170px;
  height: 50px;
  font-size: 18px;
  flex-shrink: 0;
  margin-left: auto;
  @media (max-width: 800px) {
    position: absolute;
    bottom: 20px;
    right: 18px;
    width: 90px;
    height: 24px;
    font-size: 9px;
  }
`;
