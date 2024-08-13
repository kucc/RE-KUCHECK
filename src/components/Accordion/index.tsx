import { PropsWithChildren, useRef, useState } from 'react';

import styled from 'styled-components';

interface AccordionProps {
  title: string;
  onClick?: () => void;
  isOpen?: boolean;
  num?: string;
  date?: string;
}

export default function Accordion({
  title,
  children,
  date,
  isOpen: passedIsOpen,
  onClick: passedHandleClick,
}: PropsWithChildren<AccordionProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(passedIsOpen ?? false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (passedHandleClick) {
      passedHandleClick();
    }
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <div>
      <Button className='header' onClick={handleClick}>
        <TitleWrapper>
          <span>{title}</span>
          {date && (
            <span style={{ color: '#a6a5a5', fontFamily: '-moz-initial', marginTop: '4px' }}>
              {date}
            </span>
          )}
        </TitleWrapper>
      </Button>
      {children && (
        <div
          style={{
            overflow: 'hidden',
            maxHeight: isOpen ? contentRef.current?.offsetHeight : 0,
            transition: 'max-height 300ms',
          }}>
          <div ref={contentRef}>{children}</div>
        </div>
      )}
    </div>
  );
}

const Button = styled.button`
  background-color: WHITE;
  border: none;
  font-family: 'sdBo';
  width: 100%;
  padding: 22px 57px 22px 29px;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 16px 0 16px 6px;
    font-size: 12px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
