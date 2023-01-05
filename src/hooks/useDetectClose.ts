import { useEffect, useState } from 'react';

const useDetectClose = (element : any, initialState : any) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = (e : any) => {
      // if (element.current !== null && !element.current.contains(e.target)) {
      setIsOpen(!isOpen);
      // }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen, element]);

  return [isOpen, setIsOpen];
};

export default useDetectClose;
