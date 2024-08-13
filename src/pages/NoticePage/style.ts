import styled from 'styled-components';

import { BLACK, GRAY, LINE_GRAY } from '@utility/COLORS';

export const StyledMenu = styled.div`
  font-family: 'tmoneyBo';
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  padding: 50px 0 25px 29px;
  @media (max-width: 800px) {
    font-size: 16px;
    padding: 30px 0 10px 6px;
  }
`;

export const StyledBody = styled.div`
  padding-left: 20px;
  padding-bottom: 150px;
`;

export const StyledCommonTitle = styled.div`
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  padding-left: 29px;
`;

export const StyledSubTitle = styled.div`
  font-size: 16px;
  /* font-family: 'sdBo'; */
  color: ${BLACK};
  padding-left: 29px;
  @media (max-width: 800px) {
    font-size: 10px;
    padding-left: 6px;
  }
`;

export const StyledBarMenu1 = styled.span`
  display: flex;
  padding: 50px 57px 0 29px;
  gap: 44px;
  font-size: 18px;
  font-family: 'sdBo';
  color: ${BLACK};
  font-size: 20px;
  @media (max-width: 800px) {
    padding: 29px 0 0 6px;
    font-size: 12px;
  }
`;

export const StyledTitleWrapper = styled(StyledBarMenu1)`
  padding: 27px 57px 27px 29px;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 16px 0 16px 6px;
    font-size: 12px;
  }
`;
export const StyledBarMenu3 = styled.span`
  margin-left: auto;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledBar = styled.hr`
  width: 96%;
  height: 4px;
  background-color: ${BLACK};
  border-radius: 3px;
  border: 0;
  @media (max-width: 800px) {
    height: 2px;
  }
`;

export const StyledBottomBar = styled(StyledBar)`
  height: 0.5px;
  background-color: ${LINE_GRAY};
`;

export const CollapseBox = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 29px;
  padding-right: 35px;
  gap: 44px;
  font-size: 20px;
  font-family: 'sdBo';
  color: ${BLACK};
`;

export const StyledBoxDate = styled(StyledBarMenu3)`
  color: ${GRAY};
  margin-left: auto;
`;

export const StyledSubBar = styled.div`
  width: 1138px;
  border-bottom: 1px solid ${LINE_GRAY};
`;

export const StyledContent = styled.div`
  font-family: 'sdLi';
  line-height: 30px;
  font-size: 20px;
  padding: 35px 53px;
  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 17px;
    padding: 20px;
  }
`;

export const StyledContent2 = styled.div`
  padding: 22px 57px 22px 29px;
  @media (max-width: 800px) {
    padding: 16px 0 16px 6px;
  }
`;
