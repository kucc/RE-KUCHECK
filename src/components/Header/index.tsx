// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { setHamburgerRequest } from '@redux/actions/_main_action';
import { CheckCircleIcon, EditIcon, HomeIcon, LockStatesIcon, NoticeIcon } from '@/svg/header';
import { BLACK, RED } from '@utility/COLORS';
import { MEMBER_ROLE, PATH } from '@utility/COMMON_FUNCTION';

// import { DefaultLogo } from '..';
import {
  StyleActive,
  StyledHeaderContainer,
  StyledHorizontalLine,
  StyledLinkButton,
  StyledMobileHamburgerContainer,
  StyledMobileLogoContainer,
  StyledMobileOverlayContainer,
} from './style';

export const Header = ({ pathname }: { pathname: string }) => {
  const history = useHistory();
  // const dispatch = useDispatch();

  // const isHamburger = useSelector(state => state.main.isHamburger);
  // const member = useSelector(state => state.member.currentMember);

  const handleLink = path => {
    closeOverlay();

    history.push(path);
  };

  const closeOverlay = () => {
    document.body.classList.remove('open-modal');
    // dispatch(setHamburgerRequest(false));
  };

  return (
    <StyledMobileHamburgerContainer isHamburger={isHamburger}>
      <StyledMobileOverlayContainer isHamburger={isHamburger} onClick={closeOverlay} />
      <StyledHeaderContainer isHamburger={isHamburger}>
        <StyledMobileLogoContainer>
          {/* <DefaultLogo
            logoName='type-1-3'
            width={103}
            height={103}
            onClick={() => {
              handleLink(PATH.main);
            }}
            isPointer={true}
          /> */}
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
        {member && member.role === MEMBER_ROLE.MANAGER && (
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
