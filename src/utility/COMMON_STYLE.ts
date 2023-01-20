import { Input, InputNumber, Select } from 'antd';
import styled, { css } from 'styled-components';

import { BASE_COLOR, BLACK, GRAY, LINE_GRAY, RED } from './COLORS';

export const StyledMainContainer = styled.div`
  width: 1280px;
  padding-top: 128px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
    padding-top: 76px;
  }
`;

export const StyledIncludeHeaderMain = styled.main`
  min-height: 500px;
  margin-left: 136px;
  border-left: 1.5px solid ${LINE_GRAY};
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledUnIncludeHeaderMain = styled.main`
  width: 100%;
  padding-left: 76px;
  @media (max-width: 800px) {
    padding: 0 18px;
  }
`;

export const StyledCourseTab = styled.div`
  padding: 12px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid ${LINE_GRAY};
  @media (max-width: 800px) {
    padding: 8px 0;
    margin-bottom: 12px;
  }
`;

export const StyledTab = styled.button`
  padding: 0 36px;
  border: none;
  background-color: white;
  cursor: pointer;
  border-right: 1px solid ${LINE_GRAY};
  &:last-child {
    border: none;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const StyledTabText = styled.span<{ active?: boolean }>`
  color: ${GRAY};
  font-size: 18px;
  font-family: 'sdBo';
  padding: 14px 12px;
  ${(props: any) =>
    props.active &&
    css`
      color: ${BLACK};
      border-bottom: 3px solid ${BLACK};
    `}
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 8px 0;
  }
`;
export const StyledOldMain = styled.div`
  padding-top: 80px;
  @media (max-width: 800px) {
    padding-top: 65px;
  }
`;

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledSideMargin = styled.div`
  margin-left: 14.21%;
  margin-right: 14.21%;
  @media (max-width: 800px) {
    margin-left: 5.64%;
    margin-right: 5.64%;
  }
`;

export const StyledSidePadding = styled.div`
  padding-left: 14.21%;
  padding-right: 14.21%;
  @media (max-width: 800px) {
    padding-left: 5.64%;
    padding-right: 5.64%;
  }
`;

export const StyledVerticalLine = styled.div<{ length?: number }>`
  border-right: 1px solid #b6b6b677;
  height: ${(props: any) => (props.length ? `${props.length}px` : '40px')};
  margin-left: 5%;
`;

export const StyledSelectItem = styled.div`
  border-radius: 24px;
  text-align: center;
  margin: 0px 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  @media (max-width: 800px) {
    margin: 0px 7%;
    font-size: 9px;
    font-family: 'sdBo';
    padding: 0px 5px;
  }
`;

export const StyledArrow = styled.i<{ thin?: number; width?: number }>`
  display: inline-block;
  border: solid ${BLACK};
  border-width: ${(props: any) =>
    props.thin ? `0px ${props.thin}px ${props.thin}px 0px` : '0 3px 3px 0'};
  margin-bottom: 2px;
  padding: ${(props: any) => (props.width ? `${props.width}px` : '3px')};
  @media (max-width: 800px) {
    border-width: ${(props: any) =>
      props.thin ? `0px ${props.thin / 2}px ${props.thin / 2}px 0px` : '0 1.5px 1.5px 0'};
    padding: ${(props: any) => (props.width ? `${props.width / 2}px` : '1.5px')};
  }
`;

export const StyledRightArrow = styled(StyledArrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const StyledLeftArrow = styled(StyledArrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const StyledDownArrow = styled(StyledArrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const StyledTextArea = styled(Input)`
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  padding-left: 30px;
  padding-top: 14px;
  padding-bottom: 14px;
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const StyledInputNumber = styled(InputNumber)`
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 3px 1.5px;
  width: 300px;
  padding-left: 19px;
  padding-top: 14px;
  padding-bottom: 14px;
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 800px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const StyledSelect = styled(Select)<{ width?: number }>`
  .ant-select-selector {
    border-radius: 20px !important;
    height: 61px !important;
  }
  .ant-select-selection-item {
    padding-left: 35px !important;
    padding-top: 15px !important;
  }
  border-radius: 20px;
  width: ${(props: any) => `${props.width}px` || '150px'};
`;

export const StyledTagSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 20px !important;
    min-height: 61px !important;
    background-color: ${BASE_COLOR} !important;
    box-shadow: inset 0px 3px 1.5px lightgrey !important;
  }
  .ant-select-selection-item {
    margin-left: 10px;
    border-radius: 10px !important;
    background-color: white !important;
  }
  .ant-select-selection-item-content {
    padding: 5px;
  }
  .ant-select-selection-item-remove {
    padding-top: 3px;
  }
  border-radius: 20px;
`;

export const StyledLaguageImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: contain;
`;

export const StyledCommonTitle = styled.div`
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  padding-left: 49px;
  padding-top: 50px;
  padding-top: 50px;
`;

export const StyledCommonLayout = styled.div`
  padding: 78px 18px 0px;
  @media (max-width: 1279px) {
    padding: 78px 18px 0px;
  }
`;

export const StyledCourseTitle = styled.div`
  margin-bottom: 2px;
  font-family: 'sdBo';
  font-size: 28px;
  @media (max-width: 1279px) {
    font-size: 14px;
  }
`;
export const StyledCourseDetail = styled.div`
  font-family: 'sdSb';
  font-size: 18px;
  @media (max-width: 1279px) {
    font-size: 9px;
  }
`;
export const StyledCourseDetail2 = styled.span`
  color: ${RED};
`;
