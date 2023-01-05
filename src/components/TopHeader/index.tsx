import { useRef } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { setHamburgerRequest } from '@redux/actions/_main_action';
// import {
//   logoutMember,
//   setProfileId
// } from '@redux/actions/_member_action';
import useDetectClose from '@hooks/useDetectClose';
import { PATH } from '@utility/COMMON_FUNCTION';

import {
  StyledDropContent,
  StyledLeftContainer,
  StyledMainLogo,
  StyledMenuButton,
  StyledTimeTableLink,
  StyledTopHeader,
  StyledTopHeaderContainer,
  StyledUserContainer,
} from './style';

export const TopHeader = () => {
  const history = useHistory();
  // const dispatch = useDispatch();

  // const member = useSelector(state => state.member.currentMember);
  // const isHamburger = useSelector(state => state.main.isHamburger);

  const dropDownRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useDetectClose(dropDownRef, false);

  const handleMobileHamburger = () => {
    // if (!isHamburger) {
    document.body.classList.add('open-modal');
    // } else {
    //   document.body.classList.remove('open-modal');
    // }
    // dispatch(setHamburgerRequest(!isHamburger));
  };

  const handleLogout = () => {
    // dispatch(logoutMember());

    window.alert('로그아웃이 되었습니다!');
    window.location.href = PATH.main;
  };

  const handleGoProfile = () => {
    // dispatch(setProfileId(member.id));

    history.push(PATH.profile);
  };

  return (
    <StyledTopHeaderContainer>
      <StyledTopHeader>
        <StyledMainLogo
          src={'/img/logo/type-1-3.svg'}
          alt='logo'
          onClick={() => history.push(PATH.main)}
        />
        {/* <StyledMobileHamburgerButton src={HamburgerIcon} onClick={handleMobileHamburger} /> */}
        <StyledLeftContainer>
          <span>
            <StyledTimeTableLink to={PATH.timeTable}>동방 시간표</StyledTimeTableLink>
            {/* {member ? ( */}
            <>
              <StyledMenuButton onClick={() => setIsLoginOpen(!isLoginOpen)}>
                <StyledUserContainer>
                  {/* <StyledUserName>{member.name}</StyledUserName>님 */}
                </StyledUserContainer>
                {/* <StyledDownArrow width='4' thin='2' /> */}
              </StyledMenuButton>
              <StyledDropContent ref={dropDownRef} isLoginOpen={isLoginOpen}>
                <button onClick={handleGoProfile}>내정보</button>
                <button onClick={handleLogout}>로그아웃</button>
              </StyledDropContent>
            </>
            {/* ) : (
              <StyledLoginLink to={PATH.login}>LOGIN</StyledLoginLink>
            )} */}
          </span>
        </StyledLeftContainer>
      </StyledTopHeader>
    </StyledTopHeaderContainer>
  );
};
