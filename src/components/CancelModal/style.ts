import styled from 'styled-components';

import { GRAY, RED } from '@utility/COLORS';

export const StyledWrapper = styled.div`
  display: flex;
  font-family: 'tmoneyRe';
  flex-direction: column;
  z-index: 101;
  gap: 15px;
`;

export const StyledAlert = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 7px;
  font-weight: bold;
  font-family: 'tmoneyBo';
`;

export const StyledAlertComment = styled.div`
  color: ${RED};
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 3px;
  line-height: 25px;
`;

export const StyledStick = styled.div`
  width: 10px;
  background-color: #fa703f;
  position: absolute;
  height: 100%;
`;

export const StyledAlertDetailCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffe9d9;
  padding: 0.5rem;
  gap: 5px;
  margin-left: 10px;
`;

export const StyledWarningWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const StyledWarning = styled.span`
  color: #771505;
`;

export const StyldWarningImg = styled.img`
  width: 15px;
`;

export const StyledDesc = styled.div`
  font-size: 12px;
  color: #bc4c2e;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 15px;
`;

export const StyledButton = styled.button`
  border: none;
  display: inline-block;
  color: white;
  padding: 10px 30px;
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
`;

export const StyledCancelButton = styled(StyledButton)`
  background-color: ${GRAY};
`;

export const StyledConfirmButton = styled(StyledButton)`
  background-color: ${RED};
`;
