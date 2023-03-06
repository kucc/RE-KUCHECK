import { Dropdown, Menu } from 'antd';
import { useRecoilState } from 'recoil';

import { LanguageList } from '@constants';
import { useGetSemester } from '@hooks/use-get-semester';
import { searchLanguageState, searchQueryState } from '@recoil';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import {
  StyledDropDown,
  StyledMagnifyingGlassIcon,
  StyledMainSearchContainer,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchInput,
} from './style';

const pastSemester = ['22-1', '22-2', '23-1'];

export const MainSearch = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const [searchLanguage, setSearchLanguage] = useRecoilState(searchLanguageState);
  const { currentSemester, setCurrentSemester } = useGetSemester();

  const SemesterMenu = (
    <Menu>
      {pastSemester &&
        pastSemester.map((semester: string, key) => {
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
      {LanguageList.map(res => {
        return (
          <Menu.Item key={res}>
            <a onClick={() => setSearchLanguage(res)}>{res}</a>
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
          overlayStyle={{ overflowY: 'scroll' }}
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
    </StyledMainSearchContainer>
  );
};
