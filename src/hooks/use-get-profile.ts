import { useLayoutEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { getUser } from '@apis';
import { auth } from '@config';
import { userState } from '@recoil';

export const useGetProfile = () => {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const unlisten = onAuthStateChanged(auth, async fbUser => {
      if (fbUser && user === null) {
        setIsLoading(true);
        const { uid } = fbUser;
        const firestoreUser: User = await getUser({ queryKey: ['', uid] } as any);
        setUser(firestoreUser);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
    return () => {
      unlisten();
    };
  }, [setUser, user]);

  return { user, resetUser, isLoading };
};
