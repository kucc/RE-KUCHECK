import { useEffect, useState } from 'react';

import { Checkbox, Dropdown, Menu, Select, SelectProps } from 'antd';
import { useRecoilState } from 'recoil';

import { LanguageList } from '@constants';
import {
  courseDifficultyState,
  courseRequireTimeState,
  courseTypeState,
  selectedLanguagesState,
} from '@recoil';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import {
  StyledBodyBox,
  StyledBox,
  StyledComment,
  StyledDifficultyButton,
  StyledDropDown,
  StyledDropDownWrapper,
  StyledHorizontalLine,
  StyledInput,
  StyledInput2,
  StyledLanguage,
  StyledLanguageImg,
  StyledLine,
  StyledMainContainer,
  StyledMemberInput,
  StyledMenu,
  StyledPlaceholder,
  StyledRequireTimeButton,
  StyledSelect,
  StyledSubTitle,
  StyledTitle,
  StyledTitleBox,
  StyledTypeButton,
} from './style';

export const CourseCreatePage = () => {
  const [courseType, setCourseType] = useRecoilState(courseTypeState);
  const [courseDifficulty, setCourseDifficulty] = useRecoilState(courseDifficultyState);
  const [courseRequireTime, setCourseRequireTime] = useRecoilState(courseRequireTimeState);
  const [selectedLanguages, setSelectedLanguages] = useRecoilState(selectedLanguagesState);
  const [mainLanguageImg, setMainLanguageImg] = useState('Etc');

  useEffect(() => {
    const onMainLanguageImg = () => {
      if (selectedLanguages.length > 0) {
        setMainLanguageImg(selectedLanguages[0]);
      } else {
        setMainLanguageImg('Etc');
      }
    };
    onMainLanguageImg();
  }, [selectedLanguages]);

  const course = {
    type: ['세션', '스터디', '프로젝트'],
    difficulty: ['easy', 'medium', 'hard'],
    requireTime: ['1학점', '2학점', '3학점'],
  };

  const [inputs, setInputs] = useState({
    '1주차': '',
    '2주차': '',
    '3주차': '',
    '4주차': '',
    '5주차': '',
    '6주차': '',
    '7주차': '',
    '8주차': '',
  });

  const handleCurri = (e: any) => {
    console.log(e);
    // const value = e.target;
  };

  const TypeMenu = (
    <Menu>
      {course.type.map((type, key) => {
        return (
          <Menu.Item key={key}>
            <a onClick={() => setCourseType(type)}>{type}</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const DifficultyMenu = (
    <Menu>
      {course.difficulty.map((difficulty, key) => {
        return (
          <Menu.Item key={key}>
            <a onClick={() => setCourseDifficulty(difficulty)}>{difficulty}</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const RequireTimeMenu = (
    <Menu>
      {course.requireTime.map((time, key) => {
        return (
          <Menu.Item key={key}>
            <a onClick={() => setCourseRequireTime(time)}>{time}</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const handleSelectedLanguages = (stack: Language) => {
    if ([...selectedLanguages].includes(stack)) {
      const stacks = [...selectedLanguages].filter(res => res !== stack);
      setSelectedLanguages(stacks);
    } else {
      setSelectedLanguages([...selectedLanguages, stack]);
    }
  };

  const LanguageMenu = (
    <Menu>
      {LanguageList.map(res => {
        return (
          <Menu.Item key={res}>
            {/* <a onClick={() => setSelectedLanguages(res)}>{res}</a> */}
            <Checkbox
              onClick={() => {
                handleSelectedLanguages(res);
              }}>
              {res}
            </Checkbox>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const options: SelectProps['options'] = [];
  const courseStack = ['Git', 'NextJS', 'Express', 'Typescript', 'Pandas', 'Pytorch', 'Numpy'];

  courseStack.map(stack => {
    options.push({
      value: stack,
      label: stack,
    });
  });

  const handleStackChange = (value: string) => {
    console.log(`selected ${value}`);
    // 세부 기술 스택 넣어놓는 곳
  };

  return (
    <>
      <StyledMenu>활동 개설</StyledMenu>
      <StyledMainContainer>
        <StyledBox>
          <StyledTitleBox>
            <StyledTitle>
              <div>필수 정보</div>
              <StyledLine />
            </StyledTitle>
            <StyledComment>필수 정보는 수정이 불가하니 신중히 입력해주세요!</StyledComment>
          </StyledTitleBox>
          <StyledHorizontalLine />
          <StyledBodyBox>
            <div>
              <StyledSubTitle>활동 카테고리</StyledSubTitle>

              <StyledDropDownWrapper>
                <StyledDropDown>
                  <Dropdown overlay={TypeMenu} placement='bottomLeft'>
                    <StyledTypeButton>
                      <StyledDownArrow width='5' />
                      {courseType}
                    </StyledTypeButton>
                  </Dropdown>
                </StyledDropDown>

                <StyledDropDown>
                  <Dropdown overlay={DifficultyMenu} placement='bottomLeft'>
                    <StyledDifficultyButton>
                      <StyledDownArrow width='5' />
                      {courseDifficulty}
                    </StyledDifficultyButton>
                  </Dropdown>
                </StyledDropDown>

                <StyledDropDown>
                  <Dropdown overlay={RequireTimeMenu} placement='bottomLeft'>
                    <StyledRequireTimeButton>
                      <StyledDownArrow width='5' />
                      {courseRequireTime}
                    </StyledRequireTimeButton>
                  </Dropdown>
                </StyledDropDown>
              </StyledDropDownWrapper>
            </div>
            <div>
              <StyledSubTitle>활동 제목</StyledSubTitle>
              <StyledInput placeholder='30자 이내로 작성해주세요.' />
            </div>

            <div>
              <StyledTitleBox style={{ margin: '0px' }}>
                <StyledSubTitle>주요 기술 스택 & 사용 언어</StyledSubTitle>
                <StyledComment>
                  Tip. 중요한 순서대로 입력해주시면, 이해하기 훨씬 좋습니다.
                </StyledComment>
              </StyledTitleBox>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <StyledLanguageImg
                  src={`${process.env.PUBLIC_URL}/img/icon/${mainLanguageImg}.svg`}
                />
                <Dropdown
                  // dropdownRender={menu => <div style={{ height: 500, width: 200 }}>{menu}</div>}
                  trigger={['click']}
                  overlay={LanguageMenu}>
                  <StyledLanguage>
                    {selectedLanguages.length > 0 ? (
                      selectedLanguages.map((img, i) => (
                        <img key={i} src={`${process.env.PUBLIC_URL}/img/icon/${img}.svg`} />
                      ))
                    ) : (
                      // selectedLanguages.join(', ')
                      <>
                        <StyledPlaceholder>옵션을 선택해주세요.</StyledPlaceholder>
                      </>
                    )}
                  </StyledLanguage>
                </Dropdown>
              </div>
            </div>
          </StyledBodyBox>
        </StyledBox>

        <StyledBox>
          <StyledTitleBox>
            <StyledTitle>
              <div>세부 정보</div>
              <StyledLine />
            </StyledTitle>
          </StyledTitleBox>
          <StyledHorizontalLine />
          <StyledBodyBox>
            <div>
              <StyledTitleBox style={{ margin: '0px' }}>
                <StyledSubTitle>세부 기술 스택</StyledSubTitle>
                <StyledComment>Tip. 직접 입력하여 추가할 수도 있습니다.</StyledComment>
              </StyledTitleBox>
              <StyledSelect>
                <Select
                  mode='tags'
                  style={{ width: '100%' }}
                  onChange={handleStackChange}
                  tokenSeparators={[',']}
                  options={options}
                  placeholder='200자 이내로 옵션을 선택해주세요.'
                />
              </StyledSelect>
            </div>

            <div>
              <StyledSubTitle>활동 소개</StyledSubTitle>
              <StyledInput2
                onChange={e => {
                  console.log(e.target.value);
                }}
                placeholder='200자 이내로 작성해주세요.'
              />
            </div>

            <div>
              <StyledSubTitle>활동 목표</StyledSubTitle>
              <StyledInput2 placeholder='200자 이내로 작성해주세요.' />
            </div>

            {/* 인원 */}
            <div>
              <StyledSubTitle>활동 인원</StyledSubTitle>
              <StyledMemberInput placeholder='활동 인원' />
            </div>
            <div>
              <StyledTitleBox style={{ margin: '0px' }}>
                <StyledSubTitle>진행 요일</StyledSubTitle>
                <StyledComment>
                  Tip. 아직 정해지지 않은 경우, &apos;미정&apos;이라고 작성해주세요.
                </StyledComment>
              </StyledTitleBox>
              <StyledInput placeholder='100자 이내로 작성해주세요.' />
            </div>

            <div>
              <StyledTitleBox style={{ margin: '0px' }}>
                <StyledSubTitle>진행 장소 및 방법</StyledSubTitle>
                <StyledComment>
                  Tip. 동방에서 진행하실 경우, 시간표를 별도로 등록해주세요!
                </StyledComment>
              </StyledTitleBox>
              <StyledInput2 placeholder='200자 이내로 작성해주세요.' />
            </div>

            <div>
              <StyledSubTitle>유의사항</StyledSubTitle>
              <StyledInput2 placeholder='200자 이내로 작성해주세요.' />
            </div>
          </StyledBodyBox>
        </StyledBox>

        <StyledBox>
          <StyledTitleBox>
            <StyledTitle>
              <div>커리큘럼</div>
              <StyledLine />
            </StyledTitle>
          </StyledTitleBox>
          <StyledHorizontalLine />
          <StyledBodyBox>
            {Object.keys(inputs).map((week, i) => (
              <div key={i}>
                <StyledSubTitle>{week}</StyledSubTitle>
                <StyledInput2 onChange={handleCurri} placeholder='200자 이내로 작성해주세요.' />
              </div>
            ))}
          </StyledBodyBox>
        </StyledBox>
      </StyledMainContainer>
    </>
  );
};
