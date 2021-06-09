import * as React from 'react';

function SvgSquare(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7H7v10h10V7zM4 4v16h16V4H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSquare;
