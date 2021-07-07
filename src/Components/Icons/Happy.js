import * as React from 'react';

function SvgHappy(props) {
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
        d="M6.084 13.106c.581 2.849 3.106 5 6.124 5 3.017 0 5.542-2.151 6.123-5H6.084z"
        fill="currentColor"
      />
      <path
        d="M12.208 1.856c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm3.125 4.375a1.25 1.25 0 11-.001 2.5 1.25 1.25 0 010-2.5zm-6.25 0a1.25 1.25 0 11-.001 2.5 1.25 1.25 0 010-2.5zm3.125 13.125c-4.136 0-7.5-3.364-7.5-7.5v-1.25h15v1.25c0 4.136-3.364 7.5-7.5 7.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHappy;
