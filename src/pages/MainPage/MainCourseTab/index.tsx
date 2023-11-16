import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

// import { useSelector } from "react-redux";
import { EmptyBox, MainCourse } from '@components';

import { courseTypeTabState, searchLanguageState, searchQueryState, sortCourseState } from '@recoil';
import { StyledCourseTab, StyledTab, StyledTabLine, StyledTabRightLine, StyledTabText } from '@utility/COMMON_STYLE';

import { StyledCourseContainer } from './style';

export const MainCourseTab = ({ mainCourseData }: { mainCourseData: Course[] }) => {
  const [courseTab, setCourseTab] = useRecoilState(courseTypeTabState);
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [searchQuery] = useRecoilState(searchQueryState);
  const [searchLanguage] = useRecoilState(searchLanguageState);
  const [sortCourse] = useRecoilState(sortCourseState);

  useEffect(() => {
    let searchArray = mainCourseData;
    
    if (courseTab !== 0) {
      searchArray = searchArray.filter(res => res.courseType === courseTab);
    }
    if (searchQuery) {
      // 문자열 검색
      const regex = new RegExp(searchQuery, 'gi');
      searchArray = searchArray.filter(
        res =>
          res.courseName.match(regex) ||
          res.courseLeader.name.match(regex) ||
          res.courseStack.find(element => element.match(regex)),
      );
    }
    if (searchLanguage) {
      // 사용언어
      searchArray = searchArray.filter(res =>
        res.language.find(element => element === searchLanguage),
      );
    }
    const sortArray = searchArray;

    if (sortCourse === '타이틀') {
      // 가나다순
      sortArray.sort((a,b) => a.courseName.toLowerCase() < b.courseName.toLowerCase() ? -1 : 1);
    }
    if (sortCourse === '학점') {
      // 학점순
      sortArray.sort((a,b) => a.requireTime.toLowerCase() < b.requireTime.toLowerCase() ? -1 : 1);
    }
    if (sortCourse === '난이도') {
      // 난이도순
      sortArray.sort((a,b) => a.difficulty.toLowerCase() < b.difficulty.toLowerCase() ? -1 : 1);
    }
    //setCourseList(searchArray);
    setCourseList(sortArray);
    

  }, [mainCourseData, searchQuery, searchLanguage, sortCourse, courseTab]);

  return (
    <StyledCourseContainer>
      <StyledCourseTab>
        <StyledTab onClick={() => setCourseTab(0)}>
          <StyledTabText active={courseTab === 0}>전체</StyledTabText>
          <StyledTabRightLine />
          {courseTab === 0 && <StyledTabLine />}
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(1)}>
          <StyledTabText active={courseTab === 1}>세션</StyledTabText>
          <StyledTabRightLine />
          {courseTab === 1 && <StyledTabLine />}
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(2)}>
          <StyledTabText active={courseTab === 2}>스터디</StyledTabText>
          <StyledTabRightLine />
          {courseTab === 2 && <StyledTabLine />}
        </StyledTab>
        <StyledTab onClick={() => setCourseTab(3)}>
          <StyledTabText active={courseTab === 3}>프로젝트</StyledTabText>
          <StyledTabRightLine />
          {courseTab === 3 && <StyledTabLine />}
        </StyledTab>
      </StyledCourseTab>
      {courseList.length === 0 && <EmptyBox />}
      {courseList.length > 0 &&
        courseList.map(res => {
          if (courseTab === 0) return <MainCourse course={res} key={res.id} />;
          else if (courseTab === res.courseType) return <MainCourse course={res} key={res.id} />;
        })}
    </StyledCourseContainer>
  );
};
