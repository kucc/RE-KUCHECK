import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser, getAuth, signOut } from 'firebase/auth';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

import { db } from '@config';
import { useGetProfile } from '@hooks/use-get-profile';
import { PATH, PROFILE_EDIT_SUCCESS, RandomEmoji } from '@utility';

import { AlertModal } from '..';
import {
  StyledButton,
  StyledButtonWrapper,
  StyledCancelButton,
  StyledCommentInput,
  StyledEmoji,
  StyledForm,
  StyledInput,
  StyledLine,
  StyledModal,
  StyledTitle,
  StyledTitleText,
  StyledTitleWrapper,
  StyledWithdrawalButton,
  StyledWrapper,
} from './style';

export const ProfileModal = ({ user, setModal }: { user: User; setModal: any }) => {
  const [emoji, setEmoji] = useState(user.emoji);
  const [comment, setComment] = useState(user.comment);
  const [detailComment, setDetailComment] = useState(user.detailComment);
  const [github, setGithub] = useState(user.link);
  const [instagram, setInstagram] = useState(user.instaLink);
  const [email, setEmail] = useState(user.email);
  const [promptModal, setPromptModal] = useState(false);
  const queryClient = useQueryClient();
  const history = useHistory();

  const updateUser = useMutation(
    async () => {
      const docRef = doc(db, 'users', user.id);

      // 1. user 본인 정보 업데이트 [O]
      await updateDoc(docRef, {
        emoji: emoji,
        comment: comment,
        detailComment: detailComment,
        link: github,
        instaLink: instagram,
        email: email,
      });

      const leaderData = { emoji: emoji, comment: comment, id: user.id, name: user.name };

      // 2. user가 courseLeader인 course의 courseLeader 정보 업데이트 [O]
      const leadingCourses =
        user.courseHistory?.filter(course => course.courseLeader.id === user.id) ?? [];

      for await (const course of leadingCourses) {
        const courseId = course.id;
        const courseRef = doc(db, 'courses', courseId);

        await updateDoc(courseRef, {
          courseLeader: {
            ...leaderData,
          },
        });
      }

      alert(PROFILE_EDIT_SUCCESS);
    },

    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );

  const { resetUser } = useGetProfile();

  const deleteUserData = useMutation(async () => {
    try {
      const deleteDocRef = doc(db, 'users', user.id);
      const auth = getAuth();
      const userData: any = auth.currentUser;
      await deleteDoc(deleteDocRef);
      await deleteUser(userData);
      resetUser();
      await signOut(auth);
      alert('회원 탈퇴 되었습니다.');
      history.push(PATH.login);
    } catch (e) {
      alert('Error' + e);
    }
  });

  function isSmallScreen(): boolean {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 800;
    }
    return false;
  }

  return (
    <StyledModal>
      <Modal
        ariaHideApp={false}
        isOpen={true}
        onRequestClose={() => setModal(false)}
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
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            width: isSmallScreen() ? '80%' : '40%',
            height: '85%',
            zIndex: '100',
          },
        }}>
        <StyledTitleWrapper>
          <StyledTitle>수정하기</StyledTitle>
          <StyledCancelButton onClick={() => setModal(false)}>X</StyledCancelButton>
        </StyledTitleWrapper>
        <StyledLine />
        <StyledWrapper>
          <StyledForm>
            <StyledTitleText>이모티콘 수정 (클릭시 랜덤으로 바뀝니다!)</StyledTitleText>
            <StyledEmoji
              onClick={() => {
                setEmoji(RandomEmoji());
              }}>
              {emoji}
            </StyledEmoji>
          </StyledForm>
          <StyledForm>
            <StyledTitleText>코멘트 수정</StyledTitleText>
            <StyledCommentInput
              defaultValue={user.comment}
              spellCheck={false}
              onChange={(e: any) => {
                setComment(e.target.value);
              }}
            />
          </StyledForm>
          <StyledForm>
            <StyledTitleText>세부 코멘트 수정</StyledTitleText>
            <StyledCommentInput
              defaultValue={user.detailComment}
              spellCheck={false}
              onChange={(e: any) => {
                setDetailComment(e.target.value);
              }}
            />
          </StyledForm>
          <StyledForm>
            <StyledTitleText>github 링크 수정 (https://까지 넣어주세요!)</StyledTitleText>
            <StyledInput
              defaultValue={user.link}
              spellCheck={false}
              onChange={(e: any) => {
                setGithub(e.target.value);
              }}
            />
          </StyledForm>
          <StyledForm>
            <StyledTitleText>인스타그램 링크 수정</StyledTitleText>
            <StyledInput
              defaultValue={user.instaLink}
              spellCheck={false}
              onChange={(e: any) => {
                setInstagram(e.target.value);
              }}
            />
          </StyledForm>
          <StyledForm>
            <StyledTitleText>이메일 링크 수정</StyledTitleText>
            <StyledInput
              defaultValue={user.email}
              spellCheck={false}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </StyledForm>
        </StyledWrapper>
        <StyledWithdrawalButton
          onClick={() => {
            setPromptModal(true);
          }}>
          탈퇴하기
        </StyledWithdrawalButton>
        {promptModal && (
          <AlertModal
            isPromptModalOpened={() => {
              setPromptModal(false);
            }}
            setDeleteUser={() => {
              deleteUserData.mutate();
            }}
          />
        )}
        <StyledButtonWrapper>
          <StyledButton
            onClick={() => {
              updateUser.mutate();
              setModal(false);
            }}>
            OK
          </StyledButton>
          <StyledButton
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
            onClick={() => {
              setModal(false);
            }}>
            Cancel
          </StyledButton>
        </StyledButtonWrapper>
      </Modal>
    </StyledModal>
  );
};
