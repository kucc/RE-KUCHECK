import Modal from 'react-modal';

import {
  StyledAlert,
  StyledAlertComment,
  StyledButtonWrapper,
  StyledCancelButton,
  StyledConfirmButton,
  StyledWrapper,
} from './style';

export const CancelModal = ({
  isPromptModalOpened,
  onCancel,
}: {
  isPromptModalOpened: any;
  onCancel: () => void;
}) => {
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
          height: '180px',
          zIndex: '100',
          borderRadius: '10px',
        },
      }}>
      <StyledWrapper>
        <StyledAlert>수강 취소</StyledAlert>
        <StyledAlertComment>
          수강을 취소합니다. <br />
          만약 세션장일 경우에는 세션이 삭제되고, 공동 팀장인 경우에는 공동 팀장에서 제외됩니다.
        </StyledAlertComment>
        <StyledButtonWrapper>
          <StyledCancelButton onClick={() => isPromptModalOpened(false)}>취소</StyledCancelButton>
          <StyledConfirmButton onClick={onCancel}>확인</StyledConfirmButton>
        </StyledButtonWrapper>
      </StyledWrapper>
    </Modal>
  );
};
