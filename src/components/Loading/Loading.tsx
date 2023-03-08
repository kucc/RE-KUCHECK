import Lottie from 'lottie-react';

import { Portal } from '@components';

import loadingAnimation from '../../assets/lottie/loading.json';

export const Loading = () => {
  return (
    <Portal>
      <div className='flex h-full w-full flex-col items-center'>
        <Lottie animationData={loadingAnimation} loop={true} style={{ height: 700, width: 700 }} />
        <div className='mt-[-300px]'>
          <span className='animation-delay-0 bg-yellow100 mr-2 inline-block h-5 w-5 animate-[loading-ani_0.9s_linear_infinite] rounded-full' />
          <span className='bg-yellow300 mr-2 inline-block h-5 w-5 animate-[loading-ani_0.9s_linear_infinite] rounded-full animation-delay-200' />
          <span className='mr-2 inline-block h-5 w-5 animate-[loading-ani_0.9s_linear_infinite] rounded-full bg-yellow animation-delay-400' />
        </div>
        adasasds
      </div>
    </Portal>
  );
};
