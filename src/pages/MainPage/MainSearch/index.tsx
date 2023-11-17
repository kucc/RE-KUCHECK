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

  const SortMenu = (
    <Menu>
      {['정렬 방식', ...SortOptions].map((option: string, key) => {
        return (
          <Menu.Item key={key}>
            <div
              onClick={() => {
                if(option === '정렬 방식'){
                  setSortCourse(null);
                  return;
                }
                setSortCourse(option);
              }}>
              {option}
            </div>
          </Menu.Item>
        );
      })}
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
        <Dropdown 
        dropdownRender={menu => <div style={{ height: 500, width: 200 }}>{menu}</div>}
        trigger={['click']}
        overlay={SortMenu}>
          <StyledSearchButton>
            {sortCourse ? (
              sortCourse
            ) : (
              <>
                <StyledDownArrow width='5' />
                <span>정렬</span>
              </>
            )}
          </StyledSearchButton>
        </Dropdown>

        
      </StyledDropDown>

    </StyledMainSearchContainer>
  );
};
