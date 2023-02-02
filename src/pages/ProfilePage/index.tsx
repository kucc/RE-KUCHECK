import { useEffect, useState } from 'react';

import { ProfileModal } from '@components/ProfileModal';
import { useQuery } from '@tanstack/react-query';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getUser } from '@apis';
import { QUERY_KEY } from '@constants';
import { EmptyBox, MainCourse } from '@components';
import {
  StyledBackArrow,
  StyledBackArrowWrapper,
  StyledCommonPcLayout,
} from '@utility/COMMON_STYLE';

import {
  StyledComment,
  StyledCourseContainer,
  StyledCourseTab,
  StyledLine,
  StyledMainCourseWrapper,
  StyledMobileModifyButton,
  StyledName,
  StyledPcModifyButton,
  StyledRegisterButton,
  StyledSocialBox,
  StyledSocialContainer,
  StyledSocialLink,
  StyledTab,
  StyledTabLine,
  StyledTabText,
  StyledUserContainer,
  StyledUserDetailComment,
  StyledUserEmoji,
  StyledUserInfoContainer,
  StyledUserRole,
} from './style';
import { MainContainer } from '@pages/MainPage/style';

type CourseTab = 'past' | 'now';

export const ProfilePage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const userId = match.params.id;
  const { isLoading, isError, data } = useQuery({
    queryFn: getUser,
    queryKey: [QUERY_KEY.user, userId],
  });

  const history = useHistory();

  const [courseSemester, setCourseSemester] = useState<Course[] | null>(null);
  const [courseTab, setCourseTab] = useState<CourseTab>('now');
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (!data) return;
    const courseHistory = data.courseHistory ?? [];
    const courseNow = courseHistory.filter(course => course.semester === '22-2');
    const coursePast = courseHistory.filter(course => course.semester !== '22-2');
    if (courseTab === 'now') {
      setCourseSemester(courseNow);
    } else if (courseTab === 'past') {
      setCourseSemester(coursePast);
    }
  }, [data, courseTab]);

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러에요.</div>;
  data.id = userId;
  const email = `mailto:${data.email}`;
  const instagram = `https://www.instagram.com/${data.instaLink}`;
  let github_id = '';
  if (data.link !== undefined) {
    const github_id_index = data.link.lastIndexOf('/');
    github_id = data.link.slice(github_id_index + 1);
  }

  const onClickCourseTab = (course: CourseTab) => () => {
    setCourseTab(course);
  };

  // useEffect(() => {
  //   // 임의 코스 데이터
  //   dispatch(getMainCourseRequest('21-2'));

  //   const token = getToken();

  //   if (!token && !selectUserId) {
  //     alert('로그인 후 이용 가능합니다.');

  //     history.push(PATH.login);
  //   }

  //   if (member?.id === selectUserId || (member?.id && selectUserId === null)) {
  //     dispatch(getProfileRequest(member.id));

  //     setIsMyProfile(true);
  //   }
  // }, [dispatch, history, member?.id, selectUserId]);

  return (
    <MainContainer>
      <StyledBackArrowWrapper
        onClick={() => {
          history.goBack();
        }}>
        <StyledBackArrow src={`${process.env.PUBLIC_URL}/img/common/backArrow.svg`} />
      </StyledBackArrowWrapper>
      <StyledCommonPcLayout>
        <StyledUserInfoContainer>
          <StyledUserEmoji>{data.emoji}</StyledUserEmoji>
          <StyledUserContainer>
            <StyledName>
              {data.name}
              <StyledUserRole>{data.role}</StyledUserRole>
            </StyledName>
            <StyledComment>{data.comment}</StyledComment>
            <StyledSocialContainer>
              <StyledSocialBox>
                <img src={`${process.env.PUBLIC_URL}/img/social/email.svg`} />
                <StyledSocialLink href={email} target='_blank'>
                  {data.email}
                </StyledSocialLink>
              </StyledSocialBox>
              <StyledSocialBox>
                <img src={`${process.env.PUBLIC_URL}/img/social/github.svg`} />
                <StyledSocialLink href={data.link} target='_blank'>
                  {/* {data.link} */}
                  {github_id}
                </StyledSocialLink>
              </StyledSocialBox>
              <StyledSocialBox>
                <img src={`${process.env.PUBLIC_URL}/img/social/instagram.svg`} />
                <StyledSocialLink href={instagram} target='_blank'>
                  @{data.instaLink}
                </StyledSocialLink>
              </StyledSocialBox>
            </StyledSocialContainer>
          </StyledUserContainer>
          <StyledPcModifyButton
            onClick={() => {setModal(true)}}
          >수정하기</StyledPcModifyButton>
          {modal && <ProfileModal user={data} setModal={() => setModal(false)} />}
        </StyledUserInfoContainer>
        <StyledUserDetailComment>
          {data.detailComment?.split('\n').map(comment => (
            <>
              {comment}
              <br />
            </>
          ))}
        </StyledUserDetailComment>
        <StyledMobileModifyButton
          onClick={() => {setModal(true)}}
        >수정하기</StyledMobileModifyButton>
        <StyledCourseContainer>
          <StyledCourseTab>
            <StyledTab onClick={onClickCourseTab('now')}>
              <StyledTabText active={courseTab === 'now'}>현재 활동</StyledTabText>
              {courseTab === 'now' ? <StyledTabLine /> : ''}
            </StyledTab>
            |
            <StyledTab onClick={onClickCourseTab('past')}>
              <StyledTabText active={courseTab === 'past'}>지난 활동</StyledTabText>
              {courseTab === 'past' ? <StyledTabLine /> : ''}
            </StyledTab>
          </StyledCourseTab>
          <StyledLine />
          <StyledMainCourseWrapper>
            {courseSemester?.length === 0 && <EmptyBox />}
            {courseSemester?.map((course: Course, i: number) => (
              <MainCourse course={course} key={i} profile={true}/>
            ))}
          </StyledMainCourseWrapper>
        </StyledCourseContainer>
      </StyledCommonPcLayout>
    </MainContainer>
  );
};