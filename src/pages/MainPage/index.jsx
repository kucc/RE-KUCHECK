import { useState } from 'react';

// import { useDispatch, useSelector } from "react-redux";
import { MainTopContainer } from './MainTopContainer';
import { MainContainer } from './style';

export const MainPage = () => {
  // const dispatch = useDispatch();

  // const { status: commonInfoStatus, data: commonInfoData } = useSelector(
  //   state => ({
  //     status: state.common.commonInfo.status,
  //     data: state.common.commonInfo.data,
  //   }),
  // );
  // current Semester : 현재 무슨 학기인지 => string
  const [currentSemester, setCurrentSemester] = useState('');

  // 학기 정보 불러오기
  // useEffect(() => {
  //   dispatch(getCommonInfoRequest());
  // }, []);

  // // 학기에 맞춰 코스 불러오기

  return (
    <MainContainer>
      <MainTopContainer />
    </MainContainer>
  );
};
