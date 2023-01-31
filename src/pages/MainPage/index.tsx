import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { getCourses } from '@apis';
import { QUERY_KEY } from '@constants';
import { currentSemesterState } from '@recoil';

import { MainCourseTab } from './MainCourseTab';
import { MainSearch } from './MainSearch';
// import { useDispatch, useSelector } from "react-redux";
import { MainTopContainer } from './MainTopContainer';
import { MainContainer } from './style';

export const MainPage = () => {
  // const dispatch = useDispatch();
  const [currentSemester] = useRecoilState(currentSemesterState);

  const { data, isLoading, isError } = useQuery({
    queryFn: getCourses,
    queryKey: [QUERY_KEY.course, currentSemester],
  });

  if (isLoading || isError) return <div />;

  return (
    <MainContainer>
      <MainTopContainer />
      <MainSearch />
      <MainCourseTab mainCourseData={data} />
    </MainContainer>
  );
};
