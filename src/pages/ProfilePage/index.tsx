import { useState } from 'react';
import EmailIcon from '../../svg/profile/email.svg';
import GithubIcon from '../../svg/profile/github.svg';
import InstagramIcon from '../../svg/profile/instagram.svg';
import { 
  StyledCommonLayout,
  StyledCourseTitle,
  StyledCourseDetail,
  StyledCourseDetail2
  } from '@utility/COMMON_STYLE';

// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import {
  StyledUserInfoContainer,
  StyledUserEmoji,
  StyledUserContainer,
  StyledName,
  StyledUserRole,
  StyledComment,
  StyledSocialContainer,
  StyledSocialBox,
  StyledSocialLink,
  StyledPcModifyButton,
  StyledMobileModifyButton,
  StyledUserDetailComment,
  StyledCourseContainer,
  StyledCourseTab,
  StyledTab,
  StyledTabText,
  StyledTabLine,
  StyledLine,
  StyledMainCourseWrapper,
  StyledMainCourse,
  StyledCourseProfile,
  StyledCourseProfileImg,
  StyledCourseProfileCircle,
  StyledCourseProfileEmoji,
  StyledCourseProfileName,
  StyledCourseInfo,
  StyledStackWrapper,
  StyledStackImg,
  StyledRegisterButton,
} from './style'

import JsImg from '../../svg/stack/js.svg';

import { profileInfo } from './data';
// import { getMainCourseRequest } from '@redux/actions/_course_action';

// import { getToken } from '@/api';

export const ProfilePage = () => {
  // const history = useHistory();
  // const dispatch = useDispatch();

  // const mainCourseData = useSelector(state => state.course.mainCourse.data);

  // const member = useSelector(state => state.member.currentMember);
  // const selectUserId = useSelector(state => state.member.profileId);
  // const {
  //   status: profileStatus,
  //   data: profileInfo,
  //   error: profileError,
  // } = useSelector(state => ({
  //   status: state.member.profileInfo.status,
  //   data: state.member.profileInfo.data,
  //   error: state.member.profileInfo.error,
  // }));

  const [courseTab, setCourseTab] = useState('now');
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [register, setRegister] = useState([false, false, false]);
  const clickRegisterButton = (i:number) => {
    const newRegister = [...register];
    newRegister[i] = !newRegister[i];
    setRegister(newRegister);
  }
  const MEMBER_ROLE = {
    MANAGER: '운영진',
  }
  const email = `mailto:${profileInfo.email}`;
  const github = `https://github.com/${profileInfo.github_id}`;
  const instagram = `https://www.instagram.com/${profileInfo.instagram_id}`;
  
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

  // const profileInfo = {};

  return (
    <StyledCommonLayout>
      <StyledUserInfoContainer>
        <StyledUserEmoji>{profileInfo.emoji}</StyledUserEmoji>
        <StyledUserContainer>
          <StyledName>
            {profileInfo.name}
            {profileInfo.role === MEMBER_ROLE.MANAGER && <StyledUserRole>운영진</StyledUserRole>}
          </StyledName>
          <StyledComment>{profileInfo.comment}</StyledComment>
          <StyledSocialContainer>
            <StyledSocialBox>
              <img src={EmailIcon} />
              <StyledSocialLink href={email} target='_blank'>
                {profileInfo.email}
              </StyledSocialLink>
            </StyledSocialBox>
            <StyledSocialBox>
              <img src={GithubIcon} />
              <StyledSocialLink href={github} target='_blank'>
                {profileInfo.github_id}
              </StyledSocialLink>
            </StyledSocialBox>
            <StyledSocialBox>
              <img src={InstagramIcon} />
              <StyledSocialLink href={instagram} target='_blank'>
                @{profileInfo.instagram_id}
              </StyledSocialLink>
            </StyledSocialBox>
          </StyledSocialContainer>
        </StyledUserContainer>
        <StyledPcModifyButton>수정하기</StyledPcModifyButton>
      </StyledUserInfoContainer>
      <StyledUserDetailComment>{profileInfo.detail_comment.split('\n').map((comment) => (
        <>
          {comment}
          <br />
        </>
      ))}
      </StyledUserDetailComment>
      {/* {isMyProfile && <StyledMobileModifyButton>수정하기</StyledMobileModifyButton>} */}
      <StyledMobileModifyButton>수정하기</StyledMobileModifyButton>
      <StyledCourseContainer>
        <StyledCourseTab>
          <StyledTab onClick={() => setCourseTab('now')}>
            <StyledTabText active={courseTab === 'now'}>현재 활동</StyledTabText>
            {courseTab === 'now' ? 
              <StyledTabLine /> : ""
            }
          </StyledTab>
          |
          <StyledTab onClick={() => setCourseTab('past')}>
            <StyledTabText active={courseTab === 'past'}>지난 활동</StyledTabText>
            {courseTab === 'past' ? 
              <StyledTabLine /> : ""
            }
          </StyledTab>
        </StyledCourseTab>
        <StyledLine />
        <StyledMainCourseWrapper>
          {[0, 1, 2].map((v, i) => (
            <StyledMainCourse key={i}>
            <StyledCourseProfile>
              <StyledCourseProfileImg>
                <StyledCourseProfileCircle />
                <StyledCourseProfileEmoji>👨‍🚀</StyledCourseProfileEmoji>
              </StyledCourseProfileImg>
              <StyledCourseProfileName>
                정인아&nbsp;
                <span>팀장</span>
              </StyledCourseProfileName>
            </StyledCourseProfile>

            <StyledCourseInfo>
                <StyledStackWrapper>
                  {[0, 1, 2].map((a, i) => (
                    <StyledStackImg key={i} src={JsImg} />
                  ))}
                </StyledStackWrapper>
              <div style={{marginLeft: '1.5px'}}>
                <StyledCourseTitle>바닐라 자바스크립트 세션</StyledCourseTitle>
                <StyledCourseDetail>난이도:&nbsp;<StyledCourseDetail2>easy</StyledCourseDetail2>&ensp;/&ensp;투자시간:&nbsp;<StyledCourseDetail2>1학점</StyledCourseDetail2></StyledCourseDetail>
              </div>
            </StyledCourseInfo>
            {
              register[i] === false ?
              <StyledRegisterButton onClick={()=>{
                clickRegisterButton(i);
              }}>신청하기&nbsp;0/5</StyledRegisterButton>
              :
              <StyledRegisterButton onClick={()=>{
                clickRegisterButton(i);
              }}>수강 취소</StyledRegisterButton>
            }
          </StyledMainCourse>
          ))}
          

        </StyledMainCourseWrapper>
        {/* {mainCourseData.length === 0 && <EmptyBox />}
        {mainCourseData.length > 0 &&
          mainCourseData.map(res => {
            return <MainCourse course={res} key={res.id} />;
          })} */}
      </StyledCourseContainer>
    </StyledCommonLayout>
  );
};
