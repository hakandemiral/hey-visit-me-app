import * as React from 'react';

function SvgCorner(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 16c0-5.523 4.477-10 10-10v3a7 7 0 00-7 7H6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCorner;
