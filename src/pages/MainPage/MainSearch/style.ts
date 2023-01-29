import { Button } from 'antd';
import styled from 'styled-components';

import { BACKGROUND_GRAY, BLACK, GRAY, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledMainSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: start;
    height: auto;
    margin: 0;
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
    &:last-child {
      margin-left: 5px;
    }
  }
`;

export const StyledSearchContainer = styled.div`
  position: relative;
  margin: 0 10px;
  @media (max-width: 800px) {
    order: 2;
    width: 100%;
    margin: 7px 0 16px 0;
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

export const StyledSearchInput = styled.input`
  width: 474px;
  height: 54px;
  border: 1px solid ${LINE_GRAY};
  border-radius: 39px;
  background-color: ${BACKGROUND_GRAY};
  font-family: 'sdLi';
  font-size: 20px;
  padding-left: 76px;
  &::placeholder {
    color: ${GRAY};
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 28px;
    font-size: 10px;
    padding-left: 44px;
  }
`;

export const StyledMagnifyingGlassIcon = styled.img`
  width: 22px;
  height: 22px;
  position: absolute;
  left: 37px;
  top: 16px;
  @media (max-width: 800px) {
    width: 12px;
    height: 12px;
    left: 24px;
    top: 8px;
  }
`;
