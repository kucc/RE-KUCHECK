import { ReactNode, useEffect, useRef } from 'react';

import { createPortal } from 'react-dom';

import './portal.css';

interface PortalProps {
  children: ReactNode;
  isBackgroundBlack?: boolean;
  onClickBackground?: () => void;
}

export const Portal = ({ children, isBackgroundBlack = true, onClickBackground }: PortalProps) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return ref.current
    ? createPortal(
        <div>
          <div onClick={onClickBackground} className='overlay'>
            {children}
          </div>
        </div>,
        ref.current,
      )
    : null;
};
