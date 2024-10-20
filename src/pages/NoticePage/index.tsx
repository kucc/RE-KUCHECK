import { useEffect, useState } from 'react';

import { Divider } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';

import Accordion from '@components/Accordion';
import { Loading } from '@components/Loading';

import { db } from '@config';
import { useGetProfile } from '@hooks';
import { RED } from '@utility/COLORS';

import { StyledBody, StyledContent2, StyledMenu, StyledSubTitle } from './style';

interface Notice {
  title: string;
  content: string;
  id: number;
}

export const NoticePage = () => {
  const [noticeList, setNoticeList] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useGetProfile();
  const history = useHistory();

  const getNotices = async () => {
    const noticesSnapshot = await getDocs(collection(db, 'notices'));
    const noticesData: Notice[] = noticesSnapshot.docs.map((notice, index) => {
      const { title, content } = notice.data();
      return { title, content, id: index + 1 };
    });
    setNoticeList(noticesData);
    setIsLoading(false);
  };

  useEffect(() => {
    getNotices();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      {/* TODO: 관리자 공지사항 작성 및 수정 기능 추가 */}
      <StyledBody>
        <div style={{ paddingBottom: '80px' }}>
          <StyledMenu>공지사항</StyledMenu>
          <StyledSubTitle>KUCC 내 활동 관련 운영 정책들을 확인해보세요!</StyledSubTitle>
        </div>
        {/* <StyledAddNoticeButtonWrapper>
          <Button
            type='primary'
            onClick={() => {
              history.push(PATH.noticeAdmin);
            }}>
            작성
          </Button>
        </StyledAddNoticeButtonWrapper> */}
        <ul>
          {noticeList.map((notice: Notice, index: number) => (
            <li key={index} style={{ listStyle: 'none' }}>
              <Divider orientation='left' style={{ margin: 2, color: RED }}>
                {String(index + 1).padStart(2, '0')}
              </Divider>
              <Accordion title={notice.title} date='2024-03'>
                <StyledContent2>
                  {notice.content.split('\\n').map((comment: string, i: number) => (
                    <div key={i}>
                      {comment}
                      <br />
                    </div>
                  ))}
                </StyledContent2>
              </Accordion>
            </li>
          ))}
        </ul>
      </StyledBody>
    </div>
  );
};
