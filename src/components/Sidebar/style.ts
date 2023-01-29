import styled from 'styled-components';

export const StyledSidebarContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
`;

export const StyledSidebar = styled.div`
  padding-top: 40px;
  padding-right: 20px;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dedede;
`;

export const StyledMainContent = styled.div`
  /* width: fit-content; */
  flex-grow: 1;
`;
