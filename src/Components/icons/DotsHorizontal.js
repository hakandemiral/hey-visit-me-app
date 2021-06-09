import * as React from 'react';

function SvgDotsHorizontal(props) {
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
        d="M5 12h.01H5zm7 0h.01H12zm7 0h.01H19zM6 12a1 1 0 11-2 0 1 1 0 012 0v0zm7 0a1 1 0 11-2 0 1 1 0 012 0v0zm7 0a1 1 0 11-2 0 1 1 0 012 0v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDotsHorizontal;
