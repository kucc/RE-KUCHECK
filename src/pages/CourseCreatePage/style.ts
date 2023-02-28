import { Button } from 'antd';
import styled from 'styled-components';

import { BACKGROUND_GRAY, BLACK, GRAY, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0px 18px;
  margin-bottom: 31px;
  @media (max-width: 800px) {
    gap: 20px;
    margin-bottom: 21px;
  }
`;

export const StyledMenu = styled.div`
  font-size: 26px;
  margin: 35px 0 25px 49px;
  @media (max-width: 800px) {
    font-size: 16px;
    margin: 30px 0 10px 26px;
  }
`;

export const StyledBox = styled.div`
  margin-top: 5px;
  padding: 30px 0;
  border-radius: 10px;
  border: solid 1.5px rgb(222, 222, 222);
  font-size: 16px;
  @media (max-width: 800px) {
    padding: 20px 0;
    font-size: 10px;
    border: solid 0.8px rgb(222, 222, 222);
  }
`;

export const StyledHorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid ${LINE_GRAY};
`;

export const StyledTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-left: 65px;
  margin-bottom: 7.5px;
  @media (max-width: 800px) {
    gap: 12px;
    margin-left: 20px;
    margin-bottom: 5px;
  }
`;

export const StyledTitle = styled.div`
  height: 50px;
  width: 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: 'sdBo';
  @media (max-width: 800px) {
    height: 30px;
    width: 66px;
    font-size: 14px;
  }
`;

export const StyledLine = styled.hr`
  height: 4px;
  width: 100%;
  background-color: ${BLACK};
  border: 0;
  border-radius: 3px;
  @media (max-width: 800px) {
    height: 3px;
  }
`;

export const StyledComment = styled.div`
  font-family: 'sdLi';
  font-size: 18px;
  margin-top: 3px;
  @media (max-width: 800px) {
    height: 10px;
    font-size: 10px;
  }
`;

export const StyledBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 45px;
  @media (max-width: 800px) {
    padding: 25px 12px;
    gap: 28px;
  }
`;

export const StyledSubTitle = styled.div`
  font-family: 'sdBo';
  margin-left: 30px;
  margin-bottom: 14px;
  font-size: 18px;
  @media (max-width: 800px) {
    margin-left: 15px;
    font-size: 12px;
    margin-bottom: 10px;
    max-width: 85px;
  }
`;

export const StyledDropDown = styled.div`
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

export const StyledDropDownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  @media (max-width: 800px) {
    gap: 4px;
  }
`;

export const StyledDropDownButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 60px;
  color: ${BLACK};
  background-color: white;
  border-radius: 30px;
  border: 1px solid ${LINE_GRAY};
  gap: 21px;
  img {
    width: 16px;
  }
  span {
    font-family: 'sdBo';
  }
  @media (max-width: 800px) {
    font-size: 10px;
    gap: 9px;
    height: 30px;
    img {
      width: 6px;
    }
  }
`;

export const StyledCategoryButton = styled(StyledDropDownButton)`
  width: auto;
  padding: 0 2.3rem;
  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

export const StyledRequireTimeButton = styled(StyledDropDownButton)`
  width: 195px;
  @media (max-width: 800px) {
    width: 82px;
  }
`;

export const StyledInput = styled.textarea`
  padding-top: 18px;
  width: 100%;
  height: 60px;
  resize: none;
  font-size: 18px;
  border: 1px solid ${LINE_GRAY};
  border-radius: 39px;
  background-color: ${BACKGROUND_GRAY};
  font-family: 'sdLi';
  padding-left: 30px;
  box-sizing: border-box;
  white-space: pre-line;
  &::placeholder {
    color: ${GRAY};
  }
  @media (max-width: 800px) {
    height: 32px;
    font-size: 10px;
    padding-left: 15px;
    padding-top: 8px;
  }
`;

export const StyledPlaceholder = styled.span`
  font-size: 18px;
  font-family: 'sdLi';
  color: ${GRAY};
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const StyledSearchButton = styled(Button)`
  width: 154px;
  height: 54px;
  font-size: 18px;
  color: ${BLACK};
  background-color: white;
  border-radius: 30px;
  border: 1px solid ${LINE_GRAY};
  span {
    font-family: 'sdBo';
  }
  i {
    margin-right: 12px;
  }
  @media (max-width: 800px) {
    width: 95px;
    height: 28px;
    font-size: 10px;
    i {
      margin-right: 6px;
    }
  }
`;

export const StyledLanguage = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 18px;
  border: 1px solid ${LINE_GRAY};
  border-radius: 39px;
  background-color: ${BACKGROUND_GRAY};
  font-family: 'sdLi';
  padding-left: 30px;
  box-sizing: border-box;
  img {
    width: 30px;
  }
  @media (max-width: 800px) {
    height: 32px;
    font-size: 10px;
    padding-left: 15px;
    gap: 5px;
    img {
      width: 18px;
    }
  }
`;

export const StyledLanguageImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-right: 7px;
  object-fit: contain;
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    margin-right: 2px;
  }
`;

export const StyledSelect = styled.div`
  .ant-select .ant-select-selector {
    width: 100%;
    height: 60px;
    font-size: 18px;
    border: 1px solid ${LINE_GRAY};
    border-radius: 39px;
    color: ${GRAY};
    font-family: 'sdLi';
    padding-left: 30px;
    box-sizing: border-box;
    background-color: ${BACKGROUND_GRAY};
    @media (max-width: 800px) {
      height: 32px;
      font-size: 10px;
      padding-left: 15px;
    }
    .ant-select-selection-placeholder {
      padding-left: 20px;
      color: ${GRAY};
      font-family: 'sdLi';
      @media (max-width: 800px) {
        padding-left: 5px;
      }
    }
    .ant-select-selection-item-content {
      color: ${BLACK};
    }
  }
`;

export const StyledInput2 = styled(StyledInput)`
  height: 160px;
  border-radius: 24px;
  @media (max-width: 800px) {
    height: 85px;
    border-radius: 9px;
  }
`;

export const StyledMemberInput = styled.input`
  width: 200px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  font-size: 18px;
  color: ${BLACK};
  border: 1px solid ${LINE_GRAY};
  font-family: 'sdBo';
  @media (max-width: 800px) {
    font-size: 10px;
    width: 90px;
    height: 30px;
  }
`;

export const StyledRegisterButton = styled.button`
  font-family: 'sdBo';
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 25px;
  background-color: ${RED};
  border: none;
  color: white;
  width: 166px;
  height: 50px;
  font-size: 18px;
  margin-right: 18px;
  @media (max-width: 800px) {
    font-size: 10px;
    width: 80px;
    height: 26px;
  }
`;
