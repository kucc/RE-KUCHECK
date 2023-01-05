import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getMainCourseRequest } from "@redux/actions/_course_action";
import { getProfileRequest } from "@redux/actions/_member_action";

import { EmptyBox, MainCourse } from "@components";

import { getToken } from "@/api";
import { MEMBER_ROLE, PATH } from "@utility/COMMON_FUNCTION";
import {
    StyledCourseTab,
    StyledTab,
    StyledTabText
} from "@utility/COMMON_STYLE";

import EmailIcon from "../../svg/profile/email.svg";
import GithubIcon from "../../svg/profile/github.svg";
import InstagramIcon from "../../svg/profile/instagram.svg";
import {
    StyledComment,
    StyledCourseContainer,
    StyledMobileModifyButton,
    StyledName,
    StyledPcModifyButton,
    StyledSocialBox,
    StyledSocialContainer,
    StyledSocialLink,
    StyledUserContainer,
    StyledUserDetailComment,
    StyledUserEmoji,
    StyledUserInfoContainer,
    StyledUserRole
} from "./style";

export const ProfilePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const mainCourseData = useSelector((state) => state.course.mainCourse.data);

  const member = useSelector((state) => state.member.currentMember);
  const selectUserId = useSelector((state) => state.member.profileId);
  const {
    status: profileStatus,
    data: profileInfo,
    error: profileError,
  } = useSelector((state) => ({
    status: state.member.profileInfo.status,
    data: state.member.profileInfo.data,
    error: state.member.profileInfo.error,
  }));

  const [courseTab, setCourseTab] = useState("now");
  const [isMyProfile, setIsMyProfile] = useState(false);

  useEffect(() => {
    // 임의 코스 데이터
    dispatch(getMainCourseRequest("21-2"));

    const token = getToken();

    if (!token && !selectUserId) {
      alert("로그인 후 이용 가능합니다.");

      history.push(PATH.login);
    }

    if (member?.id === selectUserId || (member?.id && selectUserId === null)) {
      dispatch(getProfileRequest(member.id));

      setIsMyProfile(true);
    }
  }, [dispatch, history, member?.id, selectUserId]);

  return (
    <>
      <StyledUserInfoContainer>
        <StyledUserEmoji>{profileInfo.emoji}</StyledUserEmoji>
        <StyledUserContainer>
          <StyledName>
            {profileInfo.name}
            {profileInfo.role === MEMBER_ROLE.MANAGER && (
              <StyledUserRole>운영진</StyledUserRole>
            )}
          </StyledName>
          <StyledComment>{profileInfo.comment}</StyledComment>
          <StyledSocialContainer>
            <StyledSocialBox>
              <img src={EmailIcon} />
              <StyledSocialLink
                href="mailto:ina20118@korea.ac.kr"
                target="_blank"
              >
                {profileInfo.email}
              </StyledSocialLink>
            </StyledSocialBox>
            <StyledSocialBox>
              <img src={GithubIcon} />
              <StyledSocialLink href="https://github.com" target="_blank">
                {profileInfo.github_id}
              </StyledSocialLink>
            </StyledSocialBox>
            <StyledSocialBox>
              <img src={InstagramIcon} />
              <StyledSocialLink
                href="https://www.instagram.com/"
                target="_blank"
              >
                {profileInfo.instagram_id}
              </StyledSocialLink>
            </StyledSocialBox>
          </StyledSocialContainer>
        </StyledUserContainer>
        <StyledPcModifyButton>수정하기</StyledPcModifyButton>
      </StyledUserInfoContainer>
      <StyledUserDetailComment>
        {profileInfo.detail_comment}
      </StyledUserDetailComment>
      {isMyProfile && (
        <StyledMobileModifyButton>수정하기</StyledMobileModifyButton>
      )}
      <StyledCourseContainer>
        <StyledCourseTab>
          <StyledTab onClick={() => setCourseTab("now")}>
            <StyledTabText active={courseTab === "now"}>
              현재 활동
            </StyledTabText>
          </StyledTab>
          <StyledTab onClick={() => setCourseTab("past")}>
            <StyledTabText active={courseTab === "past"}>
              지난 활동
            </StyledTabText>
          </StyledTab>
        </StyledCourseTab>
        {mainCourseData.length === 0 && <EmptyBox />}
        {mainCourseData.length > 0 &&
          mainCourseData.map((res) => {
            return <MainCourse course={res} key={res.id} />;
          })}
      </StyledCourseContainer>
    </>
  );
};

ProfilePage.propTypes = {
  member: PropTypes.object,
};
