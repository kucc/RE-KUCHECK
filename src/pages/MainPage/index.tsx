// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import { Loading } from '@components';

import { getCourses } from '@apis';
import { useGetSemester } from '@hooks/use-get-semester';

import { MainCourseTab } from './MainCourseTab';
import { MainSearch } from './MainSearch';
import { MainTopContainer } from './MainTopContainer';
import { MainContainer } from './style';

export const MainPage = () => {
  // const dispatch = useDispatch();
  const { checkedSemester } = useGetSemester();

  const [data, setData] = useState<Course[] | null>(null);

  const getData = async (checkedSemester: string) => {
    const unsubscribe = await getCourses(checkedSemester, courses => setData(courses));
    return () => {
      unsubscribe();
    };
  };

  useEffect(() => {
    if (checkedSemester) {
      getData(checkedSemester);
    }
  }, [checkedSemester]);

  if (!data) return <Loading />;

  return (
    <MainContainer>
      <MainTopContainer />
      <MainSearch />
      <MainCourseTab mainCourseData={data} />
    </MainContainer>
  );
};
