import styled from 'styled-components';

import { BLACK, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledUserInfoContainer = styled.div`
  display: flex;
  height: 158px;
  align-items: center;
  padding: 0 28px;
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
    font-size: 70px;
  }
`;

export const StyledUserContainer = styled.div`
  width: 100%;
  margin-left: 35px;
  @media (max-width: 1279px) {
    margin: 0;
  }
`;

export const StyledName = styled.div`
  font-family: 'sdMe';
  font-size: 24px;
  line-height: 32px;
  color: ${BLACK};
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
    font-size: 12px;
  }
`;

export const StyledComment = styled.div`
  font-family: 'sdMe';
  font-size: 16px;
  @media (max-width: 1279px) {
    font-size: 10px;
    margin: 10px 0 12.5px 0;
  }
`;

export const StyledSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  justify-content: flex-start;
  @media (max-width: 1279px) {
    gap: 16px;
    justify-content: center;
  }
`;

export const StyledSocialBox = styled.span`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
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
  @media (max-width: 1279px) {
    display: none;
  }
`;

export const StyledMobileModifyButton = styled(StyledModifyButton)`
  display: none;
  width: 98px;
  height: 29px;
  font-size: 10px;
  @media (max-width: 1279px) {
    display: block;
    margin: 12px auto 0 auto;
  }
`;

export const StyledUserDetailComment = styled.div`
  border: 1.5px solid ${LINE_GRAY};
  padding: 25px 44px;
  border-radius: 18px;
  font-family: 'sdLi';
  font-size: 16px;
  @media (max-width: 1279px) {
    border: 0.8px solid ${LINE_GRAY};
    padding: 14px 30px;
    font-size: 10px;
    text-align: center;
  }
`;

export const StyledCourseContainer = styled.div`
  margin: 60px 0 82px 0;
  @media (max-width: 1279px) {
    margin: 42px 0 86px 0;
  }
`;
