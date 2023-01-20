import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getUser } from '@apis';
import { QUERY_KEY } from '@constants';
import {
  StyledCommonLayout,
  StyledCourseDetail,
  StyledCourseDetail2,
  StyledCourseTitle,
} from '@utility/COMMON_STYLE';
import {
  StyledComment,
  StyledCourseContainer,
  StyledCourseInfo,
  StyledCourseProfile,
  StyledCourseProfileCircle,
  StyledCourseProfileEmoji,
  StyledCourseProfileImg,
  StyledCourseProfileName,
  StyledCourseTab,
  StyledLine,
  StyledMainCourse,
  StyledMainCourseWrapper,
  StyledMobileModifyButton,
  StyledName,
  StyledPcModifyButton,
  StyledRegisterButton,
  StyledSocialBox,
  StyledSocialContainer,
  StyledSocialLink,
  StyledStackImg,
  StyledStackTitle,
  StyledStackWrapper,
  StyledTab,
  StyledTabLine,
  StyledTabText,
  StyledUserContainer,
  StyledUserDetailComment,
  StyledUserEmoji,
  StyledUserInfoContainer,
  StyledUserRole,
} from './style';

export const ProfilePage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const userId = match.params.id;
  const { isLoading, isError, data } = useQuery({
    queryFn: getUser,
    queryKey: [QUERY_KEY.user, userId],
  });

  const history = useHistory();
  // course.semester === '23-1' 로 수정해야 됨
  const courseNow = data?.courseHistory?.filter((course: Course) => course?.semester === '22-2');
  const coursePast = data?.courseHistory?.filter((course: Course) => course?.semester !== '22-2');

  const [courseTab, setCourseTab] = useState('now');
  const [courseSemester, setCourseSemester] = useState(courseNow);

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러에요.</div>;

  const email = `mailto:${data.email}`;
  const instagram = `https://www.instagram.com/${data.instaLink}`;
  let github_id = '';
  if (data.link !== undefined) {
    const github_id_index = data.link.lastIndexOf('/');
    github_id = data.link.slice(github_id_index + 1);
  }

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
    <StyledCommonLayout>
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
        <StyledPcModifyButton>수정하기</StyledPcModifyButton>
      </StyledUserInfoContainer>
      <StyledUserDetailComment>
        {data.detailComment?.split('\n').map(comment => (
          <>
            {comment}
            <br />
          </>
        ))}
      </StyledUserDetailComment>
      <StyledMobileModifyButton>수정하기</StyledMobileModifyButton>
      <StyledCourseContainer>
        <StyledCourseTab>
          <StyledTab onClick={() => {setCourseTab('now'); setCourseSemester(courseNow);}}>
            <StyledTabText active={courseTab === 'now'}>현재 활동</StyledTabText>
            {courseTab === 'now' ? <StyledTabLine /> : ''}
          </StyledTab>
          |
          <StyledTab onClick={() => {setCourseTab('past'); setCourseSemester(coursePast);}}>
            <StyledTabText active={courseTab === 'past'}>지난 활동</StyledTabText>
            {courseTab === 'past' ? <StyledTabLine /> : ''}
          </StyledTab>
        </StyledCourseTab>
        <StyledLine />
        <StyledMainCourseWrapper>
          {courseTab === 'now'}
        {courseSemester?.map((course, i) => (
            <StyledMainCourse
              key={i}
              onClick={() => {
                history.push(`/course/detail/${course.id}`);
              }}>
              <StyledCourseProfile>
                <StyledCourseProfileImg>
                  <StyledCourseProfileCircle />
                  <StyledCourseProfileEmoji>{course.courseLeader.emoji}</StyledCourseProfileEmoji>
                </StyledCourseProfileImg>
                <StyledCourseProfileName>
                  {course.courseLeader.name}&nbsp;
                  <span>팀장</span>
                </StyledCourseProfileName>
              </StyledCourseProfile>

              <StyledCourseInfo>
                <StyledStackTitle>
                  <StyledStackWrapper>
                    {course.language.map((a, i) => (
                      <StyledStackImg key={i} src={`${process.env.PUBLIC_URL}/img/icon/${a}.svg`} />
                      ))}
                  </StyledStackWrapper>
                  <StyledCourseTitle>{course.courseName}</StyledCourseTitle>
                </StyledStackTitle>
                  <StyledCourseDetail>
                    난이도:&nbsp;<StyledCourseDetail2>{course.difficulty}</StyledCourseDetail2>
                    &ensp;/&ensp;투자시간:&nbsp;
                    <StyledCourseDetail2>{course.requireTime}학점</StyledCourseDetail2>
                  </StyledCourseDetail>
              </StyledCourseInfo>
              {courseTab === 'now' ? 
                <StyledRegisterButton
                  // onClick={() => {
                  //   courseCancelButton(i);
                  // }}
                  >
                  수강 취소
                </StyledRegisterButton>
              : ''}
            </StyledMainCourse>
          ))}
        </StyledMainCourseWrapper>
        
      </StyledCourseContainer>
    </StyledCommonLayout>
  );
};
