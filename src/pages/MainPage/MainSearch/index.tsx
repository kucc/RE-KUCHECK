import { Dropdown, Menu } from 'antd';
import { useRecoilState } from 'recoil';

import { LanguageList , SortOptions } from '@constants';
import { useGetSemester } from '@hooks/use-get-semester';
import { searchLanguageState, searchQueryState, sortCourseState } from '@recoil';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import {
  StyledDropDown,
  StyledMagnifyingGlassIcon,
  StyledMainSearchContainer,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchInput,
} from './style';

export const MainSearch = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const [searchLanguage, setSearchLanguage] = useRecoilState(searchLanguageState);

  const [sortCourse, setSortCourse] = useRecoilState(sortCourseState);

  const { currentSemester, setCurrentSemester, pastSemsters } = useGetSemester();

  const SemesterMenu = (
    <Menu>
      {pastSemsters.map((semester: string, key) => {
        return (
          <Menu.Item key={key}>
            <a onClick={() => setCurrentSemester(semester)}>20{semester}학기</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const LanguageMenu = (
    <Menu>
      {(['전체', ...LanguageList] as (Language | '전체')[]).map(res => {
        return (
          <Menu.Item key={res}>
            <div
              onClick={() => {
                if (res === '전체') {
                  setSearchLanguage(null);
                  return;
                }
                setSearchLanguage(res);
              }}>
              {res}
            </div>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const handleSelect = (event) =>{
    setSortCourse(event.target.value);
  };

  const SortMenu = () => (
    <Menu>
      <select onChange={handleSelect}>
        <option value= "sortName">타이틀</option>
        <option value= "sortTime">학점</option>
        <option value= "sortDifficulty">난이도</option>
      </select>
    </Menu>
  );


  return (
    <StyledMainSearchContainer>
      <StyledDropDown>
        <Dropdown overlay={SemesterMenu} placement='bottomLeft'>
          <StyledSearchButton>20{currentSemester}학기</StyledSearchButton>
        </Dropdown>
      </StyledDropDown>
      <StyledSearchContainer>
        <StyledSearchInput
          placeholder='세션명, 세션장, 사용 언어를 검색해보세요!'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <StyledMagnifyingGlassIcon src={'/img/common/magnifyingGlassIcon.svg'} />
      </StyledSearchContainer>
      
      <StyledDropDown>
        <Dropdown
          dropdownRender={menu => <div style={{ height: 500, width: 200 }}>{menu}</div>}
          trigger={['click']}
          overlay={LanguageMenu}>
          <StyledSearchButton>
            {searchLanguage ? (
              searchLanguage
            ) : (
              <>
                <StyledDownArrow width='5' />
                <span>사용 언어</span>
              </>
            )}
          </StyledSearchButton>
        </Dropdown>
      </StyledDropDown>
      
      <StyledDropDown>
        <Dropdown>
          <StyledSearchButton>
            <SortMenu>
            </SortMenu>
          </StyledSearchButton>
        </Dropdown>
      </StyledDropDown>

    </StyledMainSearchContainer>
  );
};
