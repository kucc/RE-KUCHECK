export const MobileSpeechBubble = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='235'
      height='61'
      viewBox='0 0 235 61'>
      <defs>
        <filter
          id='합치기_2'
          x='0'
          y='0'
          width='235'
          height='61'
          filterUnits='userSpaceOnUse'>
          <feOffset input='SourceAlpha' />
          <feGaussianBlur stdDeviation='4' result='blur' />
          <feFlood floodColor='#dedede' />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g transform='matrix(1, 0, 0, 1, 0, 0)' filter='url(#합치기_2)'>
        <path
          id='합치기_2-2'
          data-name='합치기 2'
          d='M143.97,28.025H14.013A14.013,14.013,0,1,1,14.013,0H196.988a14.013,14.013,0,0,1,0,28.025h-38.96L139.53,37Z'
          transform='translate(12 12)'
          fill='#fff'
        />
      </g>
    </svg>
  );
};
