export const PcSpeechBubble = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='384'
      height='86'
      viewBox='0 0 384 86'>
      <defs>
        <filter
          id='speechBubble'
          x='0'
          y='0'
          width='384'
          height='86'
          filterUnits='userSpaceOnUse'>
          <feOffset input='SourceAlpha' />
          <feGaussianBlur stdDeviation='4' result='blur' />
          <feFlood floodColor='#dedede' />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g transform='matrix(1, 0, 0, 1, 0, 0)' filter='url(#speechBubble)'>
        <path
          id='speechBubble-2'
          data-name='합치기 2'
          d='M-5678.364,3120.962h-222.155A23.481,23.481,0,0,1-5924,3097.48a23.481,23.481,0,0,1,23.481-23.48h313.038A23.481,23.481,0,0,1-5564,3097.48a23.481,23.481,0,0,1-23.481,23.481h-66.9l-31.561,15.04Z'
          transform='translate(5936 -3062)'
          fill='#fff'
        />
      </g>
    </svg>
  );
};
