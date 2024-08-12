import styled from 'styled-components';

import { BLACK } from '@utility/COLORS';

export const StyledLayout = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledItem = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTitle = styled.div`
  font-size: 18px;
  color: ${BLACK};
`;

export const StyledSubTitle = styled.div`
  font-size: 16px;
`;
