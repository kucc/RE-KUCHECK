import { useEffect, useState } from 'react';

import { Checkbox, Dropdown, Menu, Select, SelectProps } from 'antd';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';

import { db } from '@config';
import { LanguageList } from '@constants';
import { useGetProfile, useRedirectToMain } from '@hooks';
import {
  COMMON_ALERT,
  CURRENT_SEMESTER,
  ERROR_ALERT,
  FORM_IS_NOT_FULL,
  NOT_REGISTER_TERM,
  SUCCESS_REGISTER_COURSE,
  StyledDownArrow,
  defaultUserAttendance,
} from '@utility';

import {
  StyledBodyBox,
  StyledBox,
  StyledCategoryButton,
  StyledComment,
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
  StyledRegisterButton,
  StyledSelect,
  StyledSubTitle,
  StyledSubTitle2,
  StyledTitle,
  StyledTitleBox,
  StyledTopWrapper,
} from './style';

export const CourseCreatePage = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<[] | Language[]>([]);
  const [mainLanguageImg, setMainLanguageImg] = useState('Etc');
  const { user: currentUser } = useGetProfile();
  const uId = currentUser?.id;

  const history = useHistory();

  useRedirectToMain();

  useEffect(() => {
    fetchRegisterTerm();
  }, []);

  const fetchRegisterTerm = async () => {
    const docRef = doc(db, 'common', 'commonInfo');
    const docSnap = (await getDoc(docRef)).data();
    if (docSnap) {
      const {
        registerTerm: { start, end },
      } = docSnap;
      if (new Date() < start.toDate() || new Date() > end.toDate()) {
        alert(NOT_REGISTER_TERM);
        history.replace('/');
      }
    }
  };

  useEffect(() => {
    const onMainLanguageImg = () => {
      if (selectedLanguages.length > 0) {
        setMainLanguageImg(selectedLanguages[selectedLanguages.length - 1]);
      } else {
        setMainLanguageImg('Etc');
      }
    };
    onMainLanguageImg();
  }, [selectedLanguages]);

  // 필수정보
  const course = {
    type: ['세션', '스터디', '프로젝트'],
    difficulty: ['easy', 'medium', 'hard'],
    requireTime: ['1학점', '2학점', '3학점'],
  };

  const [requireInform, setRequireInform] = useState<{ [key: string]: string }>({
    courseType: '',
    difficulty: '',
    requireTime: '',
    courseName: '',
  });

  const [courseType, setCourseType] = useState<number>(0);
  const [requireTime, setRequireTime] = useState<string>('');

  const onChangeRequireInform = (type: string, value: string) => {
    const result = { ...requireInform };
    if (type === 'courseType') {
      switch (value) {
        case '세션':
          setCourseType(1);
          break;
        case '스터디':
          setCourseType(2);
          break;
        case '프로젝트':
          setCourseType(3);
          break;
      }
    } else if (type === 'requireTime') {
      setRequireTime(value.charAt(0));
    }
    result[type] = value;

    setRequireInform(result);
  };

  // 세부정보
  const [detailInform, setDetailInform] = useState<{ [key: string]: string | string[] }>({
    courseStack: [],
    courseInfo: '',
    courseGoal: '',
    maxMemberNum: '',
    courseDate: '',
    coursePlace: '',
    courseNotice: '',
  });

  const onChangeDetailInform = (type: string, value: string | string[]) => {
    const result = { ...detailInform };
    result[type] = value;
    setDetailInform(result);
  };

  // 커리큘럼
  const [curriInform, setCurriInform] = useState<{ [key: string]: string }>({
    week1: '',
    week2: '',
    week3: '',
    week4: '',
    week5: '',
    week6: '',
    week7: '',
    week8: '',
  });

  const TypeMenu = (
    <Menu
      onClick={e => {
        onChangeRequireInform('courseType', e.key);
      }}
      selectedKeys={[requireInform['courseType']]}
      items={course.type.map(type => ({
        label: type,
        key: type,
      }))}
    />
  );

  const DifficultyMenu = (
    <Menu
      onClick={e => {
        onChangeRequireInform('difficulty', e.key);
      }}
      selectedKeys={[requireInform['difficulty']]}
      items={course.difficulty.map(difficulty => ({
        label: difficulty,
        key: difficulty,
      }))}
    />
  );

  const RequireTimeMenu = (
    <Menu
      onClick={e => {
        onChangeRequireInform('requireTime', e.key);
      }}
      selectedKeys={[requireInform['requireTime']]}
      items={course.requireTime.map(time => ({
        label: time,
        key: time,
      }))}
    />
  );

  const courseCategoryData = [
    {
      name: '세션 / 스터디 / 프로젝트',
      type: 'type',
      menu: TypeMenu,
      defaultValue: 'courseType',
    },
    {
      name: '난이도',
      type: 'difficulty',
      menu: DifficultyMenu,
      defaultValue: 'difficulty',
    },
    {
      name: '투자시간',
      type: 'requireTime',
      menu: RequireTimeMenu,
      defaultValue: 'requireTime',
    },
  ];

  // 주요 스택
  const handleSelectedLanguages = (stack: Language) => {
    if ([...selectedLanguages].includes(stack)) {
      const stacks = [...selectedLanguages].filter(res => res !== stack);
      setSelectedLanguages(stacks);
    } else {
      setSelectedLanguages([...selectedLanguages, stack]);
    }
  };

  const LanguageMenu = (
    <Menu style={{ overflowY: 'scroll', height: '400px' }}>
      {LanguageList.map(res => {
        return (
          <Menu.Item key={res}>
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

  // 세부 스택
  const options: SelectProps['options'] = [];
  const courseStack = [
    'Git',
    'Typescript',
    'React',
    'ReactNative',
    'NextJS',
    'Node.js',
    'NestJS',
    'Django',
    'Spring',
    'Firebase',
    'Flutter',
    'Swift',
    'Pandas',
    'Pytorch',
    'Numpy',
    'Database',
    'MachineLearning',
    'Algorithm',
    'Linux',
  ];

  courseStack.map(stack => {
    options.push({
      value: stack,
      label: stack,
    });
  });

  const validationSignUp = () => {
    if (
      Object.values(requireInform).includes('') ||
      selectedLanguages.length === 0 ||
      !detailInform.courseInfo ||
      !detailInform.courseGoal ||
      !detailInform.maxMemberNum ||
      !detailInform.courseDate ||
      !detailInform.coursePlace ||
      Object.values(curriInform).includes('')
    ) {
      return false;
    }

    return true;
  };

  // 정보 등록
  const handleRegisterCourse = async () => {
    if (!currentUser) {
      return;
    }
    if (!validationSignUp()) {
      alert(FORM_IS_NOT_FULL);
      return;
    }
    try {
      // course Add
      const docRef = await addDoc(collection(db, 'courses'), {
        courseAttendance: [
          {
            attendance: defaultUserAttendance,
            id: uId,
          },
        ],
        courseCheckAdmin: [uId],
        courseCurriculum: Object.values(curriInform),
        courseDate: detailInform['courseDate'],
        courseName: requireInform['courseName'],
        courseNotice: detailInform['courseNotice'],
        coursePlace: detailInform['coursePlace'],
        courseGoal: detailInform['courseGoal'],
        courseInfo: detailInform['courseInfo'],
        courseLeader: {
          id: uId,
          name: currentUser?.name,
          emoji: currentUser?.emoji,
          comment: currentUser?.comment,
        },
        courseMember: [uId],
        courseStack: detailInform['courseStack'],
        language: selectedLanguages,
        // 1 : 세션, 2 : 스터디, 3: 프로젝트
        courseType: courseType,
        difficulty: requireInform['difficulty'],
        maxMemberNum: Number(detailInform['maxMemberNum']),
        requireTime: requireTime,
        semester: CURRENT_SEMESTER,
      });

      // user Update
      const userRef = doc(db, 'users', currentUser.id);
      await updateDoc(userRef, {
        courseHistory: [
          ...(currentUser.courseHistory ?? []),
          {
            courseInfo: detailInform['courseInfo'],
            courseLeader: {
              id: uId,
              name: currentUser?.name,
              emoji: currentUser?.emoji,
              comment: currentUser?.comment,
            },
            courseName: requireInform['courseName'],
            courseType: courseType,
            difficulty: requireInform['difficulty'],
            language: selectedLanguages,
            requireTime: requireTime,
            semester: CURRENT_SEMESTER,
            id: docRef.id,
          },
        ],
      });

      alert(SUCCESS_REGISTER_COURSE);
      history.replace(`/course/detail/${docRef.id}`);
    } catch (error) {
      alert(`${ERROR_ALERT} ${COMMON_ALERT} ${error}`);
      history.replace('/');
    }
  };

  return (
    <>
      <StyledTopWrapper>
        <StyledMenu>
          <div>활동개설</div>
        </StyledMenu>
        <StyledRegisterButton onClick={handleRegisterCourse}>등록하기</StyledRegisterButton>
      </StyledTopWrapper>
      <StyledMainContainer>
        <StyledBox>
          <StyledTitleBox>
            <StyledTitle>
              <div>필수 정보</div>
              <StyledLine />
            </StyledTitle>
            <StyledComment style={{ marginTop: '0' }}>
              필수 정보는 수정이 불가하니 신중히 입력해주세요!
            </StyledComment>
          </StyledTitleBox>
          <StyledHorizontalLine />
          <StyledBodyBox>
            <div>
              <StyledSubTitle>활동 카테고리</StyledSubTitle>
              <StyledDropDownWrapper>
                {courseCategoryData.map((category, key) => (
                  <StyledDropDown key={key}>
                    <Dropdown overlay={category.menu} placement='bottomLeft'>
                      <StyledCategoryButton>
                        <StyledDownArrow width='5' />
                        {requireInform[category.defaultValue] || category.name}
                      </StyledCategoryButton>
                    </Dropdown>
                  </StyledDropDown>
                ))}
              </StyledDropDownWrapper>
            </div>
            <div>
              <StyledSubTitle>활동 제목</StyledSubTitle>
              <StyledInput
                onChange={e => onChangeRequireInform('courseName', e.target.value)}
                placeholder='30자 이내로 작성해주세요.'
              />
            </div>
            <div>
              <StyledTitleBox style={{ marginLeft: '0' }}>
                <StyledSubTitle style={{ marginBottom: '0' }}>사용 언어</StyledSubTitle>
                <StyledComment>
                  Tip. 중요한 순서대로 입력해주시면, 이해하기 훨씬 좋습니다.
                </StyledComment>
              </StyledTitleBox>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <StyledLanguageImg
                  src={`${process.env.PUBLIC_URL}/img/icon/${mainLanguageImg}.svg`}
                  alt={
                    mainLanguageImg === 'Etc' ? 'KUCC 로고 (기타 언어)' : `${mainLanguageImg} 로고`
                  }
                />
                <Dropdown trigger={['click']} overlay={LanguageMenu}>
                  <StyledLanguage>
                    {selectedLanguages.length > 0 ? (
                      // selectedLanguages.join(', ')
                      selectedLanguages.map((img, i) => (
                        <img
                          key={i}
                          src={`${process.env.PUBLIC_URL}/img/icon/${img}.svg`}
                          alt={img === 'Etc' ? 'KUCC 로고 (기타 언어)' : `${img} 로고`}
                        />
                      ))
                    ) : (
                      <>
                        <StyledPlaceholder>
                          찾으시는 언어가 없거나, 미정이면 ETC를 선택해주세요.
                        </StyledPlaceholder>
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
              <StyledTitleBox style={{ marginLeft: '0' }}>
                <StyledSubTitle style={{ marginBottom: '0' }}>기술 스택</StyledSubTitle>
                <StyledComment>Tip. 직접 입력하여 추가할 수도 있습니다.</StyledComment>
              </StyledTitleBox>
              <StyledSelect>
                <Select
                  mode='tags'
                  style={{ width: '100%' }}
                  onChange={e => {
                    onChangeDetailInform('courseStack', e);
                  }}
                  tokenSeparators={[',']}
                  options={options}
                  placeholder='옵션을 선택해주세요.'
                />
              </StyledSelect>
            </div>

            <div>
              <StyledSubTitle>활동 소개</StyledSubTitle>
              <StyledInput2
                onChange={e => {
                  onChangeDetailInform('courseInfo', e.target.value);
                }}
                placeholder='200자 이내로 작성해주세요.'
              />
            </div>

            <div>
              <StyledSubTitle>활동 목표</StyledSubTitle>
              <StyledInput2
                onChange={e => {
                  onChangeDetailInform('courseGoal', e.target.value);
                }}
                placeholder='200자 이내로 작성해주세요.'
              />
            </div>

            <div>
              <StyledSubTitle>활동 인원</StyledSubTitle>
              <StyledMemberInput
                type='number'
                min={1}
                onChange={e => onChangeDetailInform('maxMemberNum', e.target.value)}
                placeholder='활동 인원'
              />
            </div>
            <div>
              <StyledTitleBox style={{ marginLeft: '0' }}>
                <StyledSubTitle style={{ marginBottom: '0' }}>진행 요일</StyledSubTitle>
                <StyledComment>
                  Tip. 아직 정해지지 않은 경우, &apos;미정&apos;이라고 작성해주세요.
                </StyledComment>
              </StyledTitleBox>
              <StyledInput
                onChange={e => onChangeDetailInform('courseDate', e.target.value)}
                placeholder='100자 이내로 작성해주세요.'
              />
            </div>

            <div>
              <StyledTitleBox style={{ marginLeft: '0' }}>
                <StyledSubTitle2 style={{ marginBottom: '0' }}>진행 장소 및 방법</StyledSubTitle2>
                <StyledComment>
                  Tip. 동방에서 진행하실 경우, 시간표를 별도로 등록해주세요!
                </StyledComment>
              </StyledTitleBox>
              <StyledInput2
                onChange={e => onChangeDetailInform('coursePlace', e.target.value)}
                placeholder='200자 이내로 작성해주세요.'
              />
            </div>

            <div>
              <StyledSubTitle>유의사항</StyledSubTitle>
              <StyledInput2
                onChange={e => onChangeDetailInform('courseNotice', e.target.value)}
                placeholder='200자 이내로 작성해주세요.'
              />
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
            {Object.keys(curriInform).map((week, i) => (
              <div key={i}>
                <StyledSubTitle>{i + 1}주차</StyledSubTitle>
                <StyledInput2
                  onChange={e => {
                    const result = { ...curriInform };
                    result[week] = e.target.value;
                    setCurriInform(result);
                  }}
                  placeholder='200자 이내로 작성해주세요.'
                />
              </div>
            ))}
          </StyledBodyBox>
        </StyledBox>
      </StyledMainContainer>
    </>
  );
};
