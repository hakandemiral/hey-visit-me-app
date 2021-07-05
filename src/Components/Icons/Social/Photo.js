import * as React from 'react';

function SvgPhoto(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M128 128L0 256h192l48-16 16-48v-64zM240 272l-48-16h-64v128l128 128V320zM320 256l-48 16-16 48v64h128l128-128zM256 0v192l16 48 48 16h64V128z" />
    </svg>
  );
}

export default SvgPhoto;
