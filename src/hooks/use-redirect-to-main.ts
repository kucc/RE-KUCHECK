import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router';

import { auth } from '@config';
import { NEED_TO_LOGIN } from '@utility';

export const useRedirectToMain = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, async fbUser => {
      if (!fbUser) {
        alert(NEED_TO_LOGIN);
        history.replace('/');
      }
    });
    return () => {
      unlisten();
    };
  }, []);
};
