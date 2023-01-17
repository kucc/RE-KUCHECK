import styled from 'styled-components';
import { BLACK, LINE_GRAY, RED } from '@utility/COLORS';

export const StyledContainer = styled.div`
  margin-bottom: 25px;
`
  
export const StyledTitle = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  font-size: 12px;
  font-family: 'sdBo';
`

export const StyledLine = styled.hr`
  height: 2px;
  width: ${({width} : {width: string}) => width};
  margin-left: 18px;
  margin-top: 4px;
  background-color: ${BLACK};
  border: 0;
  border-radius: 3px;
`

export const StyledDesc = styled.div`
  margin-top: 5px;
  padding: 20px;
  padding-right: 5px;
  border-radius: 10px;
  border: solid 0.8px rgb(222,222,222);
  display: flex;
  flex-direction: ${({direction} : {direction: string}) => direction};
  justify-content: space-around;
  flex-wrap: wrap;
`

export const StyledDescBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`
export const StyledDescTitle = styled.div`
  font-family: 'sdBo';
  font-size: 14px;
`

export const StyledDescDetail = styled.div`
  font-family: 'sdLi';
  font-size: 10px;
`

export const StyledCourseTitle = styled.div`
  margin-bottom: 2px;
  font-family: 'sdBo';
  font-size: 14px;
`
export const StyledCourseDetail = styled.div`
  font-family: 'sdBo';
  font-size: 9px;
`
export const StyledCourseDetail2 = styled.span`
  color: ${RED};
`

export const StyledEmoji = styled.span`
  width: 68px;
  padding: 2px;
  font-size: 50px;
  font-family: 'sdBo';
`

export const StyledDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({gap} : {gap: string}) => gap};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

`

export const StyledDetailTitleBase = styled.span`
  font-size: 10px;
  font-family: 'sfPro';
  font-weight: bold;
`

export const StyledDetailTitle = styled(StyledDetailTitleBase)`
  min-width: 50px;
`

export const StyledDetailDesc = styled.span`
  font-size: 10px;
  font-family: 'sfProT';
`

export const StyledLine2 = styled.hr`
  height: 1px;
  width: 97%;
  background-color: ${LINE_GRAY};
  border: 0;
`
