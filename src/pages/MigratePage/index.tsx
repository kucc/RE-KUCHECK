import { ChangeEvent, useState } from 'react';

import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';

import { LoadingButton } from '@components/Buttons';
import { StyledAuthContainer, StyledCenterContainer } from '@pages/LoginPage/style';

import { db } from '@config';
import { useGetProfile } from '@hooks';

import { StyledInput, StyledSelect } from './style';

export default function MigratePage() {
  const { user, isLoading: isUserLoading } = useGetProfile();
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [studentID, setStudentID] = useState('');
  const [registeredYear, setRegisteredYear] = useState('2024');
  const [registeredSemeseter, setRegisteredSemeseter] = useState('1');

  const [isLoading, setIsLoading] = useState(false);

  const onClickMigrate = async () => {
    if (!user) return;
    try {
      setIsLoading(true);
      await fetch(`${process.env.REACT_APP_SSO_HOST}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user.id,
          email: user.email,
          password,
          name: user.name,
          studentID,
          registeredSemeseter: registeredYear + '-' + registeredSemeseter,
          description: user.comment,
          detailDescription: user.detailComment,
          github: user.link,
          instagram: user.instaLink,
        }),
      });
      await updateDoc(doc(db, 'users', user.id), { migrated: true });
      alert('계정 이전이 완료되었습니다.');
      history.replace('/');
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  if (isUserLoading) return <div />;
  if (!user || user.migrated) {
    history.replace('/login');
  }

  return (
    <StyledCenterContainer>
      <StyledAuthContainer isLogin={true}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
            marginTop: 100,
            padding: 32,
          }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 20,
              textAlign: 'center',
            }}>
            계정 이전 안내
          </div>

          <div
            style={{
              fontSize: 18,
              textAlign: 'center',
            }}>
            아직 KUCC SSO 계정으로 이전하지 않으셨네요!
          </div>
          <div
            style={{
              fontSize: 16,
              textAlign: 'center',
            }}>
            아래 정보 추가 입력 후 바로 KUCC SSO로 계정이 이관되며 이 과정에서 어떤 정보도 유실되지
            않습니다.
          </div>

          <StyledInput
            value={password}
            type='password'
            placeholder='비밀번호'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <StyledInput
            value={passwordConfirm}
            type='password'
            placeholder='비밀번호 확인'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
          />

          <StyledInput
            value={studentID}
            placeholder='학번'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentID(e.target.value)}
          />

          <div
            style={{
              display: 'flex',
              gap: 16,
              width: '100%',
            }}>
            <StyledSelect
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setRegisteredYear(e.target.value)}
              value={registeredYear}>
              <option value='' disabled>
                가입 년도
              </option>
              {[...Array(new Date().getFullYear() - 1972)].map((_, i) => (
                <option key={i} value={String(new Date().getFullYear() - i)}>
                  {new Date().getFullYear() - i}년
                </option>
              ))}
            </StyledSelect>
            <StyledSelect
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setRegisteredSemeseter(e.target.value)
              }
              value={registeredSemeseter}>
              <option value='' disabled>
                학기
              </option>
              <option value={'1'}>1학기</option>
              <option value={'1'}>2학기</option>
            </StyledSelect>
          </div>

          <LoadingButton
            onClick={onClickMigrate}
            style={{
              width: '220px',
              height: '52px',
              fontSize: '16px',
              marginTop: 40,
              flexShrink: 0,
            }}
            text='계정 이전하기'
            isLoading={isLoading}
            isActive={password === passwordConfirm && password.length >= 8}
          />
        </div>
      </StyledAuthContainer>
    </StyledCenterContainer>
  );
}
