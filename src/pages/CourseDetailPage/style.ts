import styled from 'styled-components';

import { BLACK, GRAY, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;
  padding-bottom: 5rem;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 3rem;
  }
`;

export const StyledModifyButton = styled.button`
  font-family: 'sdBo';
  border-radius: 25px;
  border: none;
  color: white;
  width: 170px;
  height: 50px;
  font-size: 18px;
  margin-right: 48px;
  @media (max-width: 800px) {
    width: 98px;
    height: 29px;
    font-size: 10px;
    margin-right: 15px;
  }
`;

export const StyledPcModifyButton = styled(StyledModifyButton)`
  background-color: ${BLACK};
`;

export const StyledPcModifyCompleteButton = styled(StyledModifyButton)`
  background-color: ${RED};
`;

export const StyledPcBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media (max-width: 800px) {
    gap: 1.5rem;
  }
`;
export const StyledPcBox1 = styled(StyledPcBox)`
  width: 25%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const StyledPcBox2 = styled(StyledPcBox)`
  width: 75%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const StyledTitleContainer = styled.div`
  margin-left: 18px;
  @media (max-width: 800px) {
    margin-left: 18px;
  }
`;
export const StyledTitle = styled.div`
  font-size: 20px;
  font-family: 'sdEB';
  @media (max-width: 800px) {
    font-family: 'sdBo';
    font-size: 12px;
  }
`;
export const StyledLineBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.8rem;
`;
export const StyledLine = styled.hr`
  width: 100%;
  height: 4px;
  margin-top: 4px;
  background-color: ${BLACK};
  border: 0;
  border-radius: 3px;
  @media (max-width: 800px) {
    height: 2px;
  }
`;
export const StyledLeaderLine = styled(StyledLineBox)`
  width: 59px;
  @media (max-width: 800px) {
    width: 32px;
  }
`;
export const StyledOtherLeadersLine = styled(StyledLineBox)`
  width: 100px;
  @media (max-width: 800px) {
    width: 56px;
  }
`;

export const StyledStackLine = styled(StyledLineBox)`
  width: 203px;
  @media (max-width: 800px) {
    width: 119px;
  }
`;

export const StyledEditButtonWrapper = styled.div`
  display: flex;
  margin-left: 40px;
  padding: 15px 0;
  @media (max-width: 800px) {
    margin: 0;
    padding-bottom: 0;
    margin-top: 10px;
  }
`;

export const StyledSelect = styled(StyledLineBox)`
  width: 108px;
  color: ${({ selected }: { selected: boolean }) => (selected ? RED : BLACK)};
  border: 1px solid ${GRAY};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 56px;
    padding: 5px;
  }
`;

export const StyledSessionLine = styled(StyledLineBox)`
  width: 108px;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 56px;
  }
`;
export const StyledCurriLine = styled(StyledLineBox)`
  width: 108px;
  @media (max-width: 800px) {
    width: 54px;
  }
`;
export const StyledLeaderBox = styled.div`
  margin-top: 5px;
  font-family: 'sdBo';
  padding: 10px 20px;
  border-radius: 10px;
  border: solid 1.5px rgb(222, 222, 222);
  font-size: 16px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
  @media (max-width: 800px) {
    font-size: 10px;
    padding: 5px 20px;
    border: solid 0.8px rgb(222, 222, 222);
  }
`;
export const StyledArrow = styled.img`
  cursor: pointer;
  width: 15px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  @media (max-width: 800px) {
    right: 20px;
  }
`;

export const StyledEmoji = styled.span`
  font-size: 50px;
`;

export const StyledName = styled.span`
  font-size: 18px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const StyledComment = styled.span`
  font-family: 'sdLi';
  font-size: 14x;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const StyledDescBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  overflow: hidden;
  @media (max-width: 800px) {
    gap: 3px;
  }
`;

export const StyledBox = styled.div`
  margin-top: 5px;
  padding: 30px;
  border-radius: 10px;
  border: solid 1.5px rgb(222, 222, 222);
  white-space: pre-wrap;
  font-size: 16px;
  @media (max-width: 800px) {
    padding: 20px;
    font-size: 10px;
    border: solid 0.8px rgb(222, 222, 222);
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 16px;
  justify-content: space-around;
  @media (max-width: 800px) {
    gap: 1.5rem;
    font-size: 10px;
    word-break: break-all;
  }
`;

export const StyledCourseTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const StyledCourseTitle = styled.div`
  margin-bottom: 2px;
  font-size: 28px;
  @media (max-width: 800px) {
    font-family: 'sdBo';
    font-size: 14px;
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
  width: 34px;
  height: 34px;
  @media (max-width: 800px) {
    width: 18px;
    height: 18px;
  }
`;

export const StyledCurriDesc = styled(StyledDescription)`
  gap: 36px;
  @media (max-width: 800px) {
    gap: 26px;
  }
`;

export const StyledDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  @media (max-width: 800px) {
    gap: 16px;
  }
`;

export const StyledDetailTitleBase = styled.div`
  font-size: 16px;
  font-family: 'sfPro';
  font-weight: bold;
  width: 50px;
  @media (max-width: 800px) {
    font-size: 10px;
    width: 40px;
  }
`;

export const StyledCurriWeekTitle = styled(StyledDetailTitleBase)`
  margin-right: 43px;
  width: 60px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledStackTitle = styled(StyledDetailTitleBase)`
  width: 100px;
  margin-right: 21px;
  white-space: nowrap;
  @media (max-width: 800px) {
    width: auto;
    margin-right: 26px;
  }
`;

export const StyledSessionDetailTitle = styled(StyledDetailTitleBase)`
  width: 100px;
  margin-right: 18px;
  @media (max-width: 800px) {
    width: 60px;
    margin-right: 9px;
  }
`;

export const StyledDetailInput = styled.textarea`
  font-size: 16px;
  font-family: 'sfProL';
  border-radius: 6px;
  padding: 5px 15px;
  border: 1px solid ${GRAY};
  width: 100%;
  height: 60px;
  resize: none;
  @media (max-width: 800px) {
    font-size: 10px;
    padding: 5px 8px;
  }
`;

export const StyledDetailDesc = styled.span`
  font-size: 16px;
  font-family: 'sfProL';
  display: flex;
  width: 100%;
  flex-direction: column;
  line-height: 24px;
  @media (max-width: 800px) {
    font-size: 10px;
    width: 90%;
    line-height: 12px;
  }
`;

export const StyledLine2 = styled.hr`
  height: 1px;
  width: 97%;
  background-color: ${LINE_GRAY};
  border: 0;
  margin: 24px 0 36px;
  @media (max-width: 800px) {
    margin: 14px 0 24px;
  }
`;
