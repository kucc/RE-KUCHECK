import PropTypes from 'prop-types';

export const HomeIcon = ({ fill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='16'
      viewBox='0 0 15 16'>
      <path
        id='home'
        fill={fill}
        d='M9.04,1.153a.768.768,0,0,1,.921,0l6.75,5.091a.72.72,0,0,1,.29.574v8a2.149,2.149,0,0,1-.659,1.543A2.286,2.286,0,0,1,14.75,17H4.25a2.286,2.286,0,0,1-1.591-.639A2.149,2.149,0,0,1,2,14.818v-8a.72.72,0,0,1,.29-.574ZM8,15.545h3V9.727H8Zm4.5,0V9a.739.739,0,0,0-.75-.727H7.25A.739.739,0,0,0,6.5,9v6.545H4.25a.762.762,0,0,1-.53-.213.716.716,0,0,1-.22-.514V7.174l6-4.525,6,4.525v7.644a.716.716,0,0,1-.22.514.762.762,0,0,1-.53.213Z'
        transform='translate(-2 -1)'
        fillRule='evenodd'
      />
    </svg>
  );
};

HomeIcon.propTypes = {
  fill: PropTypes.string,
};
