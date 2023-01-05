import PropTypes from 'prop-types';

export const LockStatesIcon = ({ fill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='17'
      viewBox='0 0 15 17'>
      <path
        id='lock-states'
        fill={fill}
        d='M9.5,2.545a2.956,2.956,0,0,0-2.121.905A3.139,3.139,0,0,0,6.5,5.636V7.955h6V5.636a3.139,3.139,0,0,0-.879-2.186A2.956,2.956,0,0,0,9.5,2.545ZM14,7.955V5.636a4.708,4.708,0,0,0-1.318-3.278,4.407,4.407,0,0,0-6.364,0A4.709,4.709,0,0,0,5,5.636V7.955H4.25A2.285,2.285,0,0,0,2,10.273v5.409A2.285,2.285,0,0,0,4.25,18h10.5A2.285,2.285,0,0,0,17,15.682V10.273a2.285,2.285,0,0,0-2.25-2.318ZM4.25,9.5a.762.762,0,0,0-.75.773v5.409a.762.762,0,0,0,.75.773h10.5a.762.762,0,0,0,.75-.773V10.273a.762.762,0,0,0-.75-.773Z'
        transform='translate(-2 -1)'
        fillRule='evenodd'
      />
    </svg>
  );
};

LockStatesIcon.propTypes = {
  fill: PropTypes.string,
};
