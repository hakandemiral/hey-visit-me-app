import * as React from 'react';

function SvgGoogle(props) {
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
        d="M6 12a6 6 0 0011.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 018.282 4.393l-3.278 2.295A6 6 0 006 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGoogle;
