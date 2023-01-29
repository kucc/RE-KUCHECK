// import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useHistory, useLocation } from 'react-router-dom';

// import { setHamburgerRequest } from '@redux/actions/_main_action';
import { CheckCircleIcon, EditIcon, HomeIcon, LockStatesIcon, NoticeIcon } from '@/svg/header';
// import { DefaultLogo } from '..';
import { useGetProfile } from '@hooks/use-get-profile';
import { BLACK, RED } from '@utility/COLORS';
import { MEMBER_ROLE, PATH } from '@utility/COMMON_FUNCTION';

import { DefaultLogo } from '..';
import {
  StyleActive,
  StyledHeaderContainer,
  StyledHorizontalLine,
  StyledLinkButton,
  StyledMobileHamburgerContainer,
  StyledMobileLogoContainer,
  StyledMobileOverlayContainer,
} from './style';

export const Header = ({
  setIsHamburgerOpen,
}: {
  setIsHamburgerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const history = useHistory();
  const { user } = useGetProfile();

  const location = useLocation();

  const pathname = location.pathname;

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const handleLink = (path: string) => {
    closeOverlay();

    history.push(path);
  };

  const closeOverlay = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <StyledMobileHamburgerContainer isHamburger={isMobile}>
      <StyledMobileOverlayContainer isHamburger={isMobile} onClick={closeOverlay} />
      <StyledHeaderContainer isHamburger={isMobile}>
        <StyledMobileLogoContainer>
          <DefaultLogo
            logoName='type-1-3'
            width={103}
            height={103}
            onClick={() => {
              handleLink(PATH.main);
            }}
            isPointer={true}
          />
          <StyledHorizontalLine />
        </StyledMobileLogoContainer>
        <StyledLinkButton
          onClick={() => {
            handleLink(PATH.main);
          }}>
          <StyleActive active={pathname === PATH.main}>
            <HomeIcon fill={pathname === PATH.main ? RED : BLACK} />
            <span>홈 화면</span>
          </StyleActive>
        </StyledLinkButton>
        <StyledLinkButton
          onClick={() => {
            handleLink(PATH.courseCreate);
          }}>
          <StyleActive active={pathname === PATH.courseCreate}>
            <EditIcon fill={pathname === PATH.courseCreate ? RED : BLACK} />
            <span>활동 개설</span>
          </StyleActive>
        </StyledLinkButton>
        <StyledLinkButton
          onClick={() => {
            handleLink(PATH.attendance);
          }}>
          <StyleActive active={pathname === PATH.attendance}>
            <CheckCircleIcon fill={pathname === PATH.attendance ? RED : BLACK} />
            <span>출결 관리</span>
          </StyleActive>
        </StyledLinkButton>
        <StyledLinkButton
          onClick={() => {
            handleLink(PATH.notice);
          }}>
          <StyleActive active={pathname === PATH.notice}>
            <NoticeIcon fill={pathname === PATH.notice ? RED : BLACK} />
            <span>공지사항</span>
          </StyleActive>
        </StyledLinkButton>
        {user && user.role === MEMBER_ROLE.MANAGER && (
          <StyledLinkButton
            onClick={() => {
              handleLink(PATH.admin);
            }}>
            <StyleActive active={pathname === PATH.admin}>
              <LockStatesIcon fill={pathname === PATH.admin ? RED : BLACK} />
              <span>관리자</span>
            </StyleActive>
          </StyledLinkButton>
        )}
      </StyledHeaderContainer>
    </StyledMobileHamburgerContainer>
  );
};
