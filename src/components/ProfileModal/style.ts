import styled from 'styled-components';

import { RED, LINE_GRAY, GRAY, BLACK, WHITE } from '@utility/COLORS';

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'tmoneyBo';
`

export const StyledTitle = styled.div`
  display: inline-block;
  margin-right: 10px;
`
export const StyledCancelButton = styled.div`
  cursor: pointer;
  padding: 5px;
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
`

export const StyledLine = styled.hr`
  margin: 10px 0;
  border: 0;
  border-radius: 3px;
  height: 2px;
  background-color: ${GRAY};
`

export const StyledTitleText = styled.div`
  font-family: 'tmoneyRe';
  font-size: 13px;
`

export const StyledEmoji = styled.span`
  font-size: 70px;
  cursor: pointer;
  display: inline-block;
`

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const StyledInput = styled.input`
    padding: 0 10px;
    border: 1px solid #dddddd;
    border-radius: 2px;
    height: 30px;
    width: 95%;
    :focus {
      outline: none !important;
      border-color: ${RED};
      box-shadow: 0 0 5px ${RED};
      transition: 0.3s;
    }
    :hover {
      background-color: rgba(245, 245, 245, 0.8);
    }
    font-family: 'tmoneyRe';
`

export const StyledCommentInput = styled.textarea`
  resize: none;
  padding: 5px 10px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  max-height: 80px;
  width: 95%;
  overflow: hidden;
  :focus {
    outline: none !important;
    border-color: ${RED};
    box-shadow: 0 0 5px ${RED};
    transition: 0.3s;
  }
  :hover {
    background-color: rgba(245, 245, 245, 0.8);
  }
  font-family: 'tmoneyRe';
`

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row-reverse;
  padding: 10px;
`

export const StyledButton = styled.button`
position: relative;
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

export const StyledWithdrawalButton = styled(StyledButton)`
  background-color: ${GRAY};
  margin: 10px;
  opacity: 0.7;
`

export const StyledModal = styled.div`

`