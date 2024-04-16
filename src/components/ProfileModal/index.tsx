import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser, getAuth, signOut } from 'firebase/auth';
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
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

      // 3. user가 courseOtherLeaders에 있는 course의 courseOtherLeaders 정보 업데이트 [O]
      const coursesRef = collection(db, 'courses');
      const coursesOtherLeadersQuery = query(
        coursesRef,
        where('courseOtherLeaders', 'array-contains', {
          emoji: user.emoji,
          id: user.id,
          name: user.name,
          comment: user.comment,
        }),
      );
      const coursesOtherLeadersQuerySnapshot = await getDocs(coursesOtherLeadersQuery);

      for await (const course of coursesOtherLeadersQuerySnapshot.docs) {
        const courseRef = doc(db, 'courses', course.id);
        const courseData = course.data();

        await updateDoc(courseRef, {
          ...courseData,
          courseOtherLeaders: courseData.courseOtherLeaders.map((leader: any) => {
            if (leader.id === user.id) {
              return {
                ...leaderData,
              };
            }
            return leader;
          }),
        });
      }

      // FIXME
      // 4. 다른 users의 courseHistory에서
      //    - 1. course의 courseLeader로 있는 course에서 courseLeader 정보 업데이트
      //    - 2. course의 courseOtherLeaders 정보에서 해당 user 정보 업데이트

      // 릴레이션 없어서 한계 있음
      // 이것 때문에 탈퇴한 유저의 세션에 참여한 유저 프로필에서 오류 발생하는 것으로 추정

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
      const userRef = doc(db, 'users', user.id);

      // 1. user가 courseLeader인 course 삭제
      const coursesRef = collection(db, 'courses');
      const coursesByUserQuery = query(coursesRef, where('courseLeader.id', '==', user.id));
      const coursesByUserQuerySnapshot = await getDocs(coursesByUserQuery);

      for await (const course of coursesByUserQuerySnapshot.docs) {
        await deleteDoc(course.ref);
      }

      // 2. user가 courseOtherLeaders에 있는 course에서 user 삭제
      const coursesOtherLeadersQuery = query(
        coursesRef,
        where('courseOtherLeaders', 'array-contains', {
          emoji: user.emoji,
          id: user.id,
          name: user.name,
          comment: user.comment,
        }),
      );
      const coursesOtherLeadersQuerySnapshot = await getDocs(coursesOtherLeadersQuery);

      for await (const course of coursesOtherLeadersQuerySnapshot.docs) {
        const courseRef = doc(db, 'courses', course.id);
        const courseData = course.data();

        await updateDoc(courseRef, {
          ...courseData,
          courseOtherLeaders: courseData.courseOtherLeaders.filter(
            (leader: any) => leader.id !== user.id,
          ),
        });
      }

      // 3. user가 courseMember에 있는 course에서 user 삭제
      const coursesAttendedQuery = query(
        coursesRef,
        where('courseMember', 'array-contains', user.id),
      );
      const coursesAttendedQuerySnapshot = await getDocs(coursesAttendedQuery);

      for await (const course of coursesAttendedQuerySnapshot.docs) {
        const courseRef = doc(db, 'courses', course.id);
        const courseData = course.data();

        await updateDoc(courseRef, {
          ...courseData,
          courseAttendance: courseData.courseAttendance.filter(
            (person: any) => person.id !== user.id,
          ),
          courseMember: courseData.courseMember.filter((member: any) => member.id !== user.id),
        });
      }

      // FIXME
      // 4. 다른 users의 courseHistory에서
      //    - 1. course의 courseLeader로 있는 course 통째로 삭제
      //    - 2. course의 courseOtherLeaders 정보에서 해당 user 삭제

      // 릴레이션 없어서 한계 있음
      // 이것 때문에 탈퇴한 유저의 세션에 참여한 유저 프로필에서 오류 발생하는 것으로 추정

      const auth = getAuth();
      const userData: any = auth.currentUser;
      await deleteDoc(userRef);
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
            <StyledTitleText>인스타그램 아이디 수정</StyledTitleText>
            <StyledInput
              defaultValue={user.instaLink}
              spellCheck={false}
              onChange={(e: any) => {
                setInstagram(e.target.value);
              }}
            />
          </StyledForm>
          {/* <StyledForm>
            <StyledTitleText>이메일 링크 수정</StyledTitleText>
            <StyledInput
              defaultValue={user.email}
              spellCheck={false}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </StyledForm> */}
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
