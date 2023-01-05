import styled from 'styled-components';

import { BLACK, GRAY, LINE_GRAY } from '@utility/COLORS';

export const StyledBody = styled.div`
  padding-left: 20px;
`;

export const StyledCommonTitle = styled.div`
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  padding-left: 29px;
`;

export const StyledSubTitle = styled.div`
  font-size: 18px;
  font-family: 'sdSb';
  color: ${BLACK};
  padding-left: 29px;
`;

export const StyledBarMenu1 = styled.span`
  display: flex;
  padding-top: 50px;
  padding-left: 29px;
  padding-right: 57px;
  gap: 44px;
  font-size: 18px;
  font-family: 'sdBo';
  color: ${BLACK};
`;

export const StyledBarMenu3 = styled.span`
  margin-left: auto;
`;

export const StyledBar = styled.div`
  width: 1138px;
  height: 16px;
  border-bottom: 4px solid ${BLACK};
  /* border-radius: 3px; */
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
export const StyledBoxDate = styled.span`
  color: ${GRAY};
  margin-left: auto;
`;

export const StyledSubBar = styled.div`
  width: 1138px;
  border-bottom: 1px solid ${LINE_GRAY};
`;

export const StyledContentBox = styled.div`
  display: ${props => (props.isShow ? '' : 'none')};
`;
