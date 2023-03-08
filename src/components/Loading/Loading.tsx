import Lottie from 'lottie-react';

import { Portal } from '@components';

import loadingAnimation from '../../assets/lottie/loading.json';

export const Loading = () => {
  return (
    <Portal>
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Lottie animationData={loadingAnimation} loop={true} style={{ height: 700, width: 700 }} />
      </div>
    </Portal>
  );
};
