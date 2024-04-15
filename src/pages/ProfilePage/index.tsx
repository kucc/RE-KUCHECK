import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { EmptyBox, Loading, MainCourse } from '@components';
import { ProfileModal } from '@components/ProfileModal';
import { MainContainer } from '@pages/MainPage/style';

import { getUser } from '@apis';
import { QUERY_KEY } from '@constants';
import { useGetProfile, useGetSemester } from '@hooks';
import { courseTabState } from '@recoil';
import { PATH } from '@utility/COMMON_FUNCTION';
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
  StyledSocialBox,
  StyledSocialContainer,
  StyledSocialLink,
  StyledTab,
  StyledTabLine,
  StyledTabRightLine,
  StyledTabText,
  StyledUserContainer,
  StyledUserDetailComment,
  StyledUserEmoji,
  StyledUserInfoContainer,
} from './style';

type CourseTab = 'past' | 'now';

export const ProfilePage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const userId = match.params.id;
  const { user: currentUser, isLoading: isCurrentUserLoading } = useGetProfile();
  const { currentSemester } = useGetSemester();

  const { isLoading, isError, data } = useQuery({
    queryFn: getUser,
    queryKey: [QUERY_KEY.user, userId],
  });

  const history = useHistory();
  const [courseSemester, setCourseSemester] = useState<Course[] | null>(null);
  const [courseTab, setCourseTab] = useRecoilState(courseTabState);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!data) return;
    const courseHistory = data.courseHistory ?? [];
    const courseNow = courseHistory.filter(course => course.semester === currentSemester);
    const coursePast = courseHistory.filter(course => course.semester !== currentSemester);
    if (courseTab === 'now') {
      setCourseSemester(courseNow);
    } else if (courseTab === 'past') {
      setCourseSemester(coursePast);
    }
  }, [data, courseTab]);

  if (isLoading || isCurrentUserLoading) return <Loading />;
  if (isError) return <EmptyBox />;

  if (isCurrentUserLoading && !currentUser) {
    alert('로그인 후 이용 가능합니다.');
    history.push(PATH.login);
    return <></>;
  }

  const uId = currentUser?.id;

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

  return (
    <MainContainer>
      <StyledBackArrowWrapper
        aria-label='뒤로가기'
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
              {/* <StyledUserRole>{data.role}</StyledUserRole> */}
            </StyledName>
            <StyledComment>{data.comment}</StyledComment>
            <StyledSocialContainer>
              <StyledSocialBox>
                <img src={`${process.env.PUBLIC_URL}/img/social/email.svg`} alt='이메일 아이콘' />
                <StyledSocialLink href={email} target='_blank'>
                  {data.email}
                </StyledSocialLink>
              </StyledSocialBox>
              {github_id && (
                <StyledSocialBox>
                  <img src={`${process.env.PUBLIC_URL}/img/social/github.svg`} alt='GitHub 로고' />
                  <StyledSocialLink href={data.link} target='_blank'>
                    {/* {data.link} */}
                    {github_id}
                  </StyledSocialLink>
                </StyledSocialBox>
              )}
              {data.instaLink && (
                <StyledSocialBox>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/social/instagram.svg`}
                    alt='Instagram 로고'
                  />
                  <StyledSocialLink href={instagram} target='_blank'>
                    @{data.instaLink}
                  </StyledSocialLink>
                </StyledSocialBox>
              )}
            </StyledSocialContainer>
          </StyledUserContainer>
          {uId === userId && (
            <StyledPcModifyButton
              onClick={() => {
                setModal(true);
              }}>
              수정하기
            </StyledPcModifyButton>
          )}

          {modal && <ProfileModal user={data} setModal={() => setModal(false)} />}
        </StyledUserInfoContainer>
        <StyledUserDetailComment>
          {data.detailComment?.split('\n').map((comment, i) => (
            <div key={i}>
              {comment}
              <br />
            </div>
          ))}
        </StyledUserDetailComment>
        {uId === userId && (
          <StyledMobileModifyButton
            onClick={() => {
              setModal(true);
            }}>
            수정하기
          </StyledMobileModifyButton>
        )}
        <StyledCourseContainer>
          <StyledCourseTab>
            <StyledTab onClick={onClickCourseTab('now')}>
              <StyledTabText active={courseTab === 'now'}>현재 활동</StyledTabText>
              {courseTab === 'now' ? <StyledTabLine /> : ''}
            </StyledTab>
            <StyledTabRightLine />
            <StyledTab onClick={onClickCourseTab('past')}>
              <StyledTabText active={courseTab === 'past'}>지난 활동</StyledTabText>
              {courseTab === 'past' ? <StyledTabLine /> : ''}
            </StyledTab>
          </StyledCourseTab>
          <StyledLine />
          <StyledMainCourseWrapper>
            {courseSemester?.length === 0 && <EmptyBox />}
            {currentSemester !== null &&
              courseSemester?.map((course: Course, i: number) => (
                <MainCourse
                  course={course}
                  key={i}
                  profileId={userId}
                  currentSemester={currentSemester}
                />
              ))}
          </StyledMainCourseWrapper>
        </StyledCourseContainer>
      </StyledCommonPcLayout>
    </MainContainer>
  );
};
