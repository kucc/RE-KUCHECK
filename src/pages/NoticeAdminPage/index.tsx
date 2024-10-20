import { useState } from 'react';

import { Input } from 'antd';
import styled from 'styled-components';

import { BLACK } from '@utility/COLORS';

export default function NoticeAdminPage() {
  const { TextArea } = Input;
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <StyledLayout>
      <StyledMenu>공지사항 작성</StyledMenu>
      <StyledBody>
        <Input
          placeholder='제목을 입력해주세요.'
          allowClear
          onChange={onChangeTitle}
          size='large'
          style={{ height: '50px' }}
        />
        <TextArea
          placeholder='내용을 입력해주세요.'
          allowClear
          onChange={onChangeContent}
          size='large'
          style={{ minHeight: '500px' }}
        />
      </StyledBody>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px 40px 0 40px;
  @media (max-width: 800px) {
  }
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledMenu = styled.div`
  font-family: 'tmoneyBo';
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  padding: 50px 0 25px 0;
  @media (max-width: 800px) {
    font-size: 16px;
    padding: 30px 0 10px 0;
  }
`;

export const StyledCommonTitle = styled.div`
  font-size: 26px;
  font-family: 'tmoneyBo';
  color: ${BLACK};
  padding-left: 29px;
`;
