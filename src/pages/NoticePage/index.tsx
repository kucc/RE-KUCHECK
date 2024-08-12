import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';

import { Loading } from '@components/Loading';

import { db } from '@config';

import {
  StyledBar,
  StyledBarMenu1,
  StyledBarMenu3,
  StyledBody,
  StyledBottomBar,
  StyledBoxDate,
  StyledContent,
  StyledMenu,
  StyledSubTitle,
  StyledTitleWrapper,
} from './style';

export const NoticePage = () => {
  interface Notice {
    title: string;
    content: string;
    id: number;
  }

  const [select, setSelect] = useState<number[]>([]);
  const noticeData: Notice[] = [];
  const [noticeList, setNoticeList] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNotices = async () => {
      const notices = await getDocs(collection(db, 'notices'));
      for await (const notice of notices.docs) {
        const { title, content } = notice.data();
        noticeData.unshift({ title, content, id: noticeData.length + 1 });
      }
      setNoticeList(noticeData);
      setIsLoading(false);
    };
    getNotices();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      {/* TODO: 관리자 공지사항 작성 및 수정 기능 추가 */}
      <StyledBody>
        <StyledMenu>공지사항</StyledMenu>
        <StyledSubTitle>KUCC 내 활동 관련 운영 정책들을 확인해보세요!</StyledSubTitle>
        <StyledBarMenu1>
          <span>No</span>
          <span>제목</span>
          <StyledBarMenu3>작성일</StyledBarMenu3>
        </StyledBarMenu1>
        <StyledBar />

        <div>
          {noticeList.map((res: Notice, i: number) => {
            return (
              <>
                <StyledTitleWrapper
                  key={i}
                  onClick={() => {
                    !select.includes(res.id)
                      ? setSelect(select => [...select, res.id])
                      : setSelect(select.filter(id => id !== res.id));
                  }}>
                  <span>{String(res.id).padStart(2, '0')}</span>
                  <div>{res.title}</div>
                  <StyledBoxDate>23.09</StyledBoxDate>
                </StyledTitleWrapper>
                <StyledBottomBar />
                {select.includes(res.id) && (
                  <>
                    <StyledContent>
                      {res.content.split('\\n').map((comment: string, i: number) => (
                        <div key={i}>
                          {comment}
                          <br />
                        </div>
                      ))}
                    </StyledContent>
                    <StyledBottomBar />
                  </>
                )}
              </>
            );
          })}
        </div>
      </StyledBody>
    </div>
  );
};
