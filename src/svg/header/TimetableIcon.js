import PropTypes from 'prop-types';

export const TimeTableIcon = ({ fill }) => {
  return (
    <span style={{ marginLeft: 2, marginRight: -2 }}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='3.25'
          y='4.25'
          width='13.5'
          height='13.5'
          rx='1.25'
          stroke='gray'
          strokeWidth='1.5'
        />
        <path
          d='M3 5.5C3 4.67157 3.67157 4 4.5 4H15.5C16.3284 4 17 4.67157 17 5.5V8H3V5.5Z'
          fill={fill}
          stroke={fill}
        />
        <path
          d='M7.5 12.1667L9.25 14.5L12.75 11'
          stroke={fill}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 7.5V2.5M14 7.5V2.5'
          stroke={fill}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  );
};

TimeTableIcon.propTypes = {
  fill: PropTypes.string,
};
