// import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, SetStateAction, cloneElement } from 'react';

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
  StyledActiveLine,
  StyledHeaderContainer,
  StyledHorizontalLine,
  StyledLinkButton,
  StyledMobileHamburgerContainer,
  StyledMobileLogoContainer,
  StyledMobileOverlayContainer,
} from './style';

const MenuArray = [
  {
    title: '홈 화면',
    path: PATH.main,
    icon: <HomeIcon />,
  },
  {
    title: '활동 개설',
    path: PATH.courseCreate,
    icon: <EditIcon />,
  },
  {
    title: '출결 관리',
    path: PATH.attendance,
    icon: <CheckCircleIcon />,
  },
  {
    title: '공지사항',
    path: PATH.notice,
    icon: <NoticeIcon />,
  },
];

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

        {MenuArray.map((menu, index) => (
          <StyledLinkButton
            key={'menu-' + index}
            onClick={() => {
              handleLink(menu.path);
            }}>
            <StyleActive active={pathname === menu.path}>
              {cloneElement(menu.icon, { fill: pathname === menu.path ? RED : BLACK })}
              <span>{menu.title}</span>
              <StyledActiveLine active={pathname === menu.path} />
            </StyleActive>
          </StyledLinkButton>
        ))}

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
