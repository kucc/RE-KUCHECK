import Modal from 'react-modal';
import {
  StyldWarningImg,
  StyledAlert,
  StyledAlertComment,
  StyledAlertDetailCommentWrapper,
  StyledButton,
  StyledButtonWrapper,
  StyledConfirmButton,
  StyledDesc,
  StyledStick,
  StyledWarning,
  StyledWarningWrapper,
  StyledWrapper,
} from './style';

export const AlertModal = ({ isPromptModalOpened, setDeleteUser }: { isPromptModalOpened: any, setDeleteUser: any }) => {

  return (
    <Modal
      ariaHideApp={false}
      isOpen={true}
      onRequestClose={() => isPromptModalOpened(false)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(69, 68, 68, 0.75)',
          zIndex: '99',
        },
        content: {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          width: '300px',
          height: '250px',
          zIndex: '100',
          borderRadius: '10px',
        },
      }}>
      <StyledWrapper>
        <StyledAlert>Delete User</StyledAlert>
        <StyledAlertComment>정말 탈퇴하시겠습니까?</StyledAlertComment>
        <div style={{ display: 'flex', position: 'relative' }}>
          <StyledStick />
          <StyledAlertDetailCommentWrapper>
            <StyledWarningWrapper>
              <StyldWarningImg src={`${process.env.PUBLIC_URL}/img/common/vector.svg`} />
              <StyledWarning>Warning</StyledWarning>
            </StyledWarningWrapper>
            <StyledDesc>
              회원 정보는 즉시 삭제되고, 현재 등록 중인 세션 / 스터디 / 프로젝트에서는 자동으로 등록
              취소됩니다. 만약 세션장일 경우에는 세션이 삭제됩니다.
              <br />
              삭제된 회원 정보는 복구할 수 없습니다.
            </StyledDesc>
          </StyledAlertDetailCommentWrapper>
        </div>
        <StyledButtonWrapper>
          <StyledButton onClick={() => isPromptModalOpened(false)}>취소</StyledButton>
          <StyledConfirmButton
            onClick={() => {setDeleteUser()}}
          >확인</StyledConfirmButton>
        </StyledButtonWrapper>
      </StyledWrapper>
    </Modal>
  );
};
