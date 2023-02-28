// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import { getCourses } from '@apis';
import { useGetSemester } from '@hooks/use-get-semester';

import { MainCourseTab } from './MainCourseTab';
import { MainSearch } from './MainSearch';
import { MainTopContainer } from './MainTopContainer';
import { MainContainer } from './style';

export const MainPage = () => {
  // const dispatch = useDispatch();
  const { currentSemester } = useGetSemester();

  const [data, setData] = useState<Course[] | null>(null);

  const getData = async (currentSemester: string) => {
    const unsubscribe = await getCourses(currentSemester, courses => setData(courses));
    return () => {
      unsubscribe();
    };
  };

  useEffect(() => {
    if (currentSemester) {
      getData(currentSemester);
    }
  }, [currentSemester]);

  if (!data) return <div>로딩중...</div>;

  return (
    <MainContainer>
      <MainTopContainer />
      <MainSearch />
      <MainCourseTab mainCourseData={data} />
    </MainContainer>
  );
};
