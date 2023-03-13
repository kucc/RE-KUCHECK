import styled from 'styled-components';

import { RED, GRAY, BLACK } from '@utility/COLORS';

export const StyledWrapper = styled.div`
  display: flex;
  font-family: 'tmoneyRe';
  flex-direction: column;
  z-index: 101;
  gap: 10px;
`

export const StyledAlert = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 7px;
  font-family: 'tmoneyBo';
`

export const StyledAlertComment = styled.div`
  color: ${RED};
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 3px;
`

export const StyledStick = styled.div`
  width: 10px;
  background-color: #FA703F;
  position: absolute;
  height: 100%;
`

export const StyledAlertDetailCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFE9D9;
  padding: 0.5rem;
  gap: 5px;
  margin-left: 10px;
`

export const StyledWarningWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`

export const StyledWarning = styled.span`
  color: #771505;
`

export const StyldWarningImg = styled.img`
  width: 15px;
`

export const StyledDesc = styled.div`
  font-size: 12px;
  color: #BC4C2E;
`

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`

export const StyledButton = styled.button`
  border: none;
  display: inline-block;
  padding: 8px 15px;
  border-radius: 15px;
  font-family: sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  background-color: ${RED};
  color: ${BLACK};
`

export const StyledConfirmButton = styled(StyledButton)`
  background-color: ${GRAY};
`