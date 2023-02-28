import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import TableDragSelect from 'react-table-drag-select';
import 'react-table-drag-select/style.css';

import { timeTableSelectedDefault, timeTableTimeList } from '@utility';

import { CustomTd, StyledTableContainer } from './style';

export const TimeTable = ({
  cells,
  editable,
  selectedData,
  selectedColor,
}: {
  cells: any;
  editable: boolean;
  selectedData?: any;
  selectedColor?: string;
}) => {
  const [selected, setSelected] = useState<boolean[][]>(timeTableSelectedDefault);
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const renderText = (specificTime: any, key: number) => {
    if (isMobile) {
      if (specificTime[key].value.length < 7) {
        return specificTime[key].value;
      } else {
        return specificTime[key].value.slice(0, 7) + '..';
      }
    } else {
      if (specificTime[key].value.length < 9) {
        return specificTime[key].value;
      } else {
        return specificTime[key].value.slice(0, 9) + '...';
      }
    }
  };

  const renderTd = (index: number, timeHour: number, timeMin: string) => {
    return selected[index].slice(1).map((time, key) => {
      // timeHour : 9, timeMin: 00 => cells.time_9_00
      const specificTime = eval('cells.time_' + timeHour + '_' + timeMin);
      if (specificTime[key].value) {
        // if time exist on Database
        return (
          <CustomTd style={{ backgroundColor: specificTime[key].color }} disabled key={key}>
            {renderText(specificTime, key)}
          </CustomTd>
        );
      } else if (!editable) {
        // editable : false => disable 활성
        return <CustomTd style={{ backgroundColor: 'rgb(211, 211, 211)' }} disabled key={key} />;
      } else {
        return <td key={key} />;
      }
    });
  };

  const renderTr = () => {
    return timeTableTimeList.map((time, index) => (
      <tr key={index}>
        <CustomTd disabled>
          {isMobile ? `${time.Hour}:${time.Minute}` : `${time.Hour} : ${time.Minute}`}
        </CustomTd>
        {renderTd(index + 1, time.Hour, time.Minute)}
      </tr>
    ));
  };

  return (
    <StyledTableContainer selectedColor={selectedColor ?? ''}>
      {cells && (
        <TableDragSelect
          value={selected}
          onChange={(selected: boolean[][]) => {
            setSelected(selected);
            selectedData && selectedData(selected);
          }}>
          <tr style={{ fontFamily: 'NexonBo', fontSize: '18px' }}>
            <CustomTd disabled />
            <CustomTd disabled>일</CustomTd>
            <CustomTd disabled>월</CustomTd>
            <CustomTd disabled>화</CustomTd>
            <CustomTd disabled>수</CustomTd>
            <CustomTd disabled>목</CustomTd>
            <CustomTd disabled>금</CustomTd>
            <CustomTd disabled>토</CustomTd>
          </tr>
          {renderTr()}
        </TableDragSelect>
      )}
    </StyledTableContainer>
  );
};
