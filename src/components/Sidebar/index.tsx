import React, { cloneElement } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useHistory, useLocation } from 'react-router';

import { StyleActive, StyledActiveLine, StyledLinkButton } from '@components/Header/style';

import {
  CheckCircleIcon,
  EditIcon,
  HomeIcon,
  LockStatesIcon,
  NoticeIcon,
  TimeTableIcon,
} from '@/svg/header';
import { useGetProfile } from '@hooks';
import { BLACK, RED } from '@utility/COLORS';
import { MEMBER_ROLE, PATH } from '@utility/COMMON_FUNCTION';

import { StyledMainContent, StyledSidebar, StyledSidebarContainer } from './style';

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
    title: '시간표',
    path: PATH.timeTable,
    icon: <TimeTableIcon />,
  },
  {
    title: '공지사항',
    path: PATH.notice,
    icon: <NoticeIcon />,
  },
];
export const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const history = useHistory();
  const location = useLocation();
  const { user } = useGetProfile();

  const pathname = location.pathname;

  if (isMobile) return <>{children}</>;

  return (
    <StyledSidebarContainer>
      <StyledSidebar>
        {MenuArray.map((menu, index) => (
          <StyledLinkButton
            key={'menu-' + index}
            onClick={() => {
              history.push(menu.path);
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
              history.push(PATH.admin);
            }}>
            <StyleActive active={pathname === PATH.admin}>
              <LockStatesIcon fill={pathname === PATH.admin ? RED : BLACK} />
              <span>관리자</span>
            </StyleActive>
          </StyledLinkButton>
        )}
      </StyledSidebar>
      <StyledMainContent>{children}</StyledMainContent>
    </StyledSidebarContainer>
  );
};
