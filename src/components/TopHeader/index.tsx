import { useRef, useState } from 'react';

import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import { auth } from '@config';
import { useGetProfile } from '@hooks/use-get-profile';
import useDetectClose from '@hooks/useDetectClose';
import { PATH } from '@utility/COMMON_FUNCTION';
import { StyledDownArrow } from '@utility/COMMON_STYLE';

import { Header } from '..';
import {
  StyledDebugMode,
  StyledDebugModeText,
  StyledDropContent,
  StyledLeftContainer,
  StyledLoginLink,
  StyledMainLogo,
  StyledMenuButton,
  StyledMobileHamburgerButton,
  StyledTimeTableLink,
  StyledTopHeader,
  StyledTopHeaderContainer,
  StyledUserContainer,
  StyledUserName,
} from './style';

export const TopHeader = () => {
  const history = useHistory();

  const { user } = useGetProfile();

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const dropDownRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useDetectClose(dropDownRef, false);

  const handleMobileHamburger = () => {
    setIsHamburgerOpen(true);
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.alert('로그아웃이 되었습니다!');
    window.location.href = PATH.main;
  };

  const handleGoProfile = () => {
    history.push(`/profile/${user?.id}`);
  };

  return (
    <>
      <StyledTopHeaderContainer>
        {process.env.REACT_APP_PROJECT_ID === 'kucc-dev-43149' && (
          <StyledDebugMode>
            <StyledDebugModeText>debug🐛</StyledDebugModeText>
          </StyledDebugMode>
        )}

        <StyledTopHeader>
          <StyledMainLogo
            src={'/img/logo/type-1-3.svg'}
            alt='KUCC 로고'
            aria-label='홈 화면으로 이동'
            onClick={() => history.push(PATH.main)}
          />
          <StyledMobileHamburgerButton onClick={handleMobileHamburger} aria-label='메뉴 열기'>
            <img src='/img/icon/mobileHamburger.svg' />
          </StyledMobileHamburgerButton>
          <StyledLeftContainer>
            <span>
              <StyledTimeTableLink to={PATH.timeTable}>동방 시간표</StyledTimeTableLink>
              {user ? (
                <>
                  <StyledMenuButton onClick={() => setIsLoginOpen(!isLoginOpen)}>
                    <StyledUserContainer>
                      <StyledUserName>{user.name}</StyledUserName>님
                    </StyledUserContainer>
                    <StyledDownArrow width={4} thin={2} />
                  </StyledMenuButton>
                  <StyledDropContent ref={dropDownRef} isLoginOpen={isLoginOpen}>
                    <button onClick={handleGoProfile}>내정보</button>
                    <button onClick={handleLogout}>로그아웃</button>
                  </StyledDropContent>
                </>
              ) : (
                <StyledLoginLink to={PATH.login}>LOGIN</StyledLoginLink>
              )}
            </span>
          </StyledLeftContainer>
        </StyledTopHeader>
      </StyledTopHeaderContainer>
      {isHamburgerOpen && <Header setIsHamburgerOpen={setIsHamburgerOpen} />}
    </>
  );
};
