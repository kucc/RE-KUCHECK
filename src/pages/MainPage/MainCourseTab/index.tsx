import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

// import { useSelector } from "react-redux";
import { EmptyBox, MainCourse } from '@components';

import { courseTabState, searchLanguageState, searchQueryState } from '@recoil';
import { StyledCourseTab, StyledTab, StyledTabLine, StyledTabRightLine, StyledTabText } from '@utility/COMMON_STYLE';

import { StyledCourseContainer } from './style';

export const MainCourseTab = ({ mainCourseData }: { mainCourseData: Course[] }) => {
  const [courseTab, setCourseTab] = useRecoilState(courseTabState);
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [searchQuery] = useRecoilState(searchQueryState);
  const [searchLanguage] = useRecoilState(searchLanguageState);

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
    setCourseList(searchArray);
  }, [mainCourseData, searchQuery, searchLanguage, courseTab]);

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
