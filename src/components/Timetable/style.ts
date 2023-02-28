import styled from 'styled-components';

export const StyledTableContainer = styled.div<{ selectedColor: string }>`
  margin: 45px 2%;

  .table-drag-select td {
    line-height: 2rem;
    border: 7px solid rgba(0, 0, 0, 0);
  }

  .table-drag-select td.cell-disabled {
    font-size: 13px;
    padding: 3px;
    @media (max-width: 1224px) {
      font-size: 10px !important;
      padding: 0px;
    }
  }

  .table-drag-select td.cell-selected {
    background-color: ${props => props.selectedColor || '#A9A9A9'};
  }
  .table-drag-select td.cell-being-selected {
    background-color: #3f83d5 !important;
  }

  @media (max-width: 1224px) {
    margin: 20px 2%;
  }
`;

export const CustomTd = styled.td<{ disabled?: boolean }>``;
