import styled from 'styled-components';

import { BLACK, LINE_GRAY, RED, YELLOW } from '@utility/COLORS';

export const StyledUserInfoContainer = styled.div`
  display: flex;
  height: 158px;
  align-items: center;
  padding: 0 28px;
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
  font-size: 100px;
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
  font-family: 'sdMe';
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
  @media (max-width: 800px) {
    gap: 4.5px;
  }
  img {
    width: 10px;
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

const StyledTextBox = styled.div`
  border: 1.5px solid ${LINE_GRAY};
  border-radius: 18px;
  @media (max-width: 1279px) {
    border: 0.8px solid ${LINE_GRAY};
  }
`;

export const StyledUserDetailComment = styled(StyledTextBox)`
  padding: 25px 44px;
  font-family: 'sdLi';
  font-size: 16px;
  @media (max-width: 1279px) {
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
  gap: 15px;
  color: ${LINE_GRAY};
  margin-left: 18px;
  @media (max-width: 1279px) {
    gap: 15px;
  }
`;

export const StyledTab = styled.span`
  font-family: 'sdBo';
  font-size: 18px;
  text-align: center;
  width: 83px;
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
    height: 0.5px;
  }
`;
export const StyledMainCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 22px;
  @media (max-width: 1279px) {
    gap: 8px;
    margin-top: 12px;
  }
`;

export const StyledMainCourse = styled(StyledTextBox)`
  height: auto;
  /* padding: 18px 0px 26px 37px; */
  padding: 18px 28px 26px 37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1279px) {
    padding: 15px 18px;
    position: relative;
  }
`;

export const StyledCourseProfile = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 65px; */
  width: 90px;
  gap: 5px;
  @media (max-width: 1279px) {
    width: 50px;
    gap: 3px;
  }
`;

export const StyledCourseProfileImg = styled.span`
  position: relative;
  width: 60px;
  height: 64px;
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
    font-size: 35px;
  }
`;

export const StyledCourseProfileName = styled.span`
  font-family: 'sdBo';
  font-size: 14px;
  span {
    font-family: 'sdLi';
  }
  @media (max-width: 1279px) {
    font-size: 8px;
  }
`;

export const StyledCourseInfo = styled.div`
  width: 100%;
  margin-left: 28px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1279px) {
    margin-left: 9.75px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const StyledStackWrapper = styled.span`
  height: 27px;
  margin-bottom: 26px;
  margin-left: 6px;
  @media (max-width: 1279px) {
    height: 16px;
    margin: 0;
  }
`;
export const StyledStackImg = styled.img`
  width: 27px;
  @media (max-width: 1279px) {
    width: 16px;
  }
`;

export const StyledRegisterButton = styled(StyledModifyButton)`
  background-color: ${RED};
  width: 170px;
  height: 50px;
  font-size: 18px;
  flex-shrink: 0;
  margin-left: auto;
  @media (max-width: 1279px) {
    position: absolute;
    bottom: 26px;
    right: 18px;
    width: 90px;
    height: 24px;
    font-size: 9px;
    box-shadow: 0 8px 3px 0px ${LINE_GRAY};
  }
`;
