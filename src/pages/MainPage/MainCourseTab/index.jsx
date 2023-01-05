import { useState } from 'react';

// import { useSelector } from "react-redux";
import { EmptyBox, MainCourse } from '@components';

import {
  StyledCourseTab,
  StyledTab,
  StyledTabText,
} from '@utility/COMMON_STYLE';

import { StyledCourseContainer } from './style';

export const MainCourseTab = () => {
  // const mainCourseData = useSelector(state => state.course.mainCourse.data);
  // const searchStringInput = useSelector(state => state.main.stringInput); // 검색어
  // const searchLanguage = useSelector(state => state.main.language); // 사용 언어

  const [courseTab, setCourseTab] = useState(0);
  const [courseList, setCourseList] = useState([]);

  // useEffect(() => {
  //   let searchArray = mainCourseData;
  //   if (searchStringInput) {
  //     // 문자열 검색
  //     const regex = new RegExp(searchStringInput, 'gi');

  //     searchArray = mainCourseData.filter(
  //       res =>
  //         res.courseName.match(regex) || res.courseLeader.name.match(regex),
  //     );
  //   }

  //   if (searchLanguage) {
  //     // 사용언어
  //     const regex = new RegExp(searchLanguage, 'gi');

  //     searchArray = mainCourseData.filter(res =>
  //       res.language.find(element => element.match(regex)),
  //     );
  //   }

  //   setCourseList(searchArray);
  // }, [mainCourseData, searchStringInput, searchLanguage]);

  return (
    <StyledCourseContainer>
      <StyledCourseTab>
        <StyledTab onClick={() => setCourseTab(0)}>
          <StyledTabText active={courseTab === 0}>전체</StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(1)}>
          <StyledTabText active={courseTab === 1}>세션</StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(2)}>
          <StyledTabText active={courseTab === 2}>스터디</StyledTabText>
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(3)}>
          <StyledTabText active={courseTab === 3}>프로젝트</StyledTabText>
        </StyledTab>
      </StyledCourseTab>
      {courseList.length === 0 && <EmptyBox />}
      {courseList.length > 0 &&
        courseList.map(res => {
          if (courseTab === 0) return <MainCourse course={res} key={res.id} />;
          else if (courseTab === res.courseType)
            return <MainCourse course={res} key={res.id} />;
        })}
    </StyledCourseContainer>
  );
};
