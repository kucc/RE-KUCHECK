import PropTypes from 'prop-types';

export const CheckCircleIcon = ({ fill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'>
      <path
        id='check-circle'
        fill={fill}
        d='M11.664,3.015A6.546,6.546,0,1,0,15.545,9V8.329a.727.727,0,1,1,1.455,0V9a8,8,0,1,1-4.744-7.312.727.727,0,0,1-.592,1.329Zm5.123-.35a.727.727,0,0,1,0,1.029l-7.273,7.28a.727.727,0,0,1-1.029,0L6.3,8.793A.727.727,0,0,1,7.332,7.764L9,9.431l6.758-6.765A.727.727,0,0,1,16.787,2.666Z'
        transform='translate(-1 -0.994)'
        fillRule='evenodd'
      />
    </svg>
  );
};

CheckCircleIcon.propTypes = {
  fill: PropTypes.string,
};
