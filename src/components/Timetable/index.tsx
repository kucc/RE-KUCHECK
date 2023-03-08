import { useState } from 'react';

import { useHistory } from 'react-router';
import TableDragSelect from 'react-table-drag-select';
import 'react-table-drag-select/style.css';

import { useWindowSize } from '@hooks/use-window-size';
import { timeTableSelectedDefault, timeTableTimeList } from '@utility';

import { ColorTd, CustomTd, StyledTableContainer } from './style';

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
  const history = useHistory();
  const [selected, setSelected] = useState<boolean[][]>(timeTableSelectedDefault);
  const { height } = useWindowSize();

  const renderText = (specificTime: any, key: number) => {
    if (specificTime[key].value.length < 9) {
      return specificTime[key].value;
    } else {
      return specificTime[key].value.slice(0, 9) + '...';
    }
  };

  const renderTd = (index: number, timeHour: number, timeMin: string) => {
    return selected[index].slice(1).map((time, key) => {
      // timeHour : 9, timeMin: 00 => cells.time_9_00
      const specificTime = eval('cells.time_' + timeHour + '_' + timeMin);
      console.log(specificTime[key]);
      if (specificTime[key].value) {
        // if time exist on Database
        return (
          <ColorTd
            style={{
              backgroundColor: specificTime[key].color,
              color: 'white',
              cursor: 'pointer',
            }}
            disabled
            key={key}>
            <div onClick={() => history.push(`/course/detail/${specificTime[key].courseId}`)}>
              {renderText(specificTime, key)}
            </div>
          </ColorTd>
        );
      } else if (!editable) {
        // editable : false => disable 활성
        return <ColorTd style={{ backgroundColor: 'rgb(211, 211, 211)' }} disabled key={key} />;
      } else {
        return <td key={key} />;
      }
    });
  };

  const renderTr = () => {
    return timeTableTimeList.map((time, index) => (
      <tr key={index} style={{ position: 'relative' }}>
        <CustomTd
          disabled
          style={{
            position: 'sticky',
            backgroundColor: 'white',
            textAlign: 'center',
            bottom: 0,
            left: -3,
            color: 'black',
          }}>
          <div>{`${time.Hour} : ${time.Minute}`}</div>
        </CustomTd>
        {renderTd(index + 1, time.Hour, time.Minute)}
      </tr>
    ));
  };

  return (
    <div style={{ overflow: 'auto', height: height - 84 + 32 }}>
      <StyledTableContainer selectedColor={selectedColor ?? ''}>
        {cells && (
          <TableDragSelect
            value={selected}
            onChange={(selected: boolean[][]) => {
              setSelected(selected);
              selectedData && selectedData(selected);
            }}>
            <tr
              style={{
                fontFamily: 'NexonBo',
                fontSize: '18px',
                position: 'sticky',
                top: -5,
                zIndex: 1,
                backgroundColor: 'white',
              }}>
              <CustomTd disabled style={{ color: 'black' }}>
                {' '}
              </CustomTd>
              <CustomTd disabled style={{ color: 'black' }}>
                일
              </CustomTd>
              <CustomTd disabled style={{ color: 'black' }}>
                월
              </CustomTd>
              <CustomTd disabled style={{ color: 'black' }}>
                화
              </CustomTd>
              <CustomTd disabled style={{ color: 'black' }}>
                수
              </CustomTd>
              <CustomTd disabled style={{ color: 'black' }}>
                목
              </CustomTd>
              <CustomTd disabled style={{ color: 'black' }}>
                금
              </CustomTd>
              <CustomTd disabled style={{ color: 'black' }}>
                토
              </CustomTd>
            </tr>
            {renderTr()}
          </TableDragSelect>
        )}
      </StyledTableContainer>
    </div>
  );
};
