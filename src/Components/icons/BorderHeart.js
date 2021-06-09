import * as React from 'react';

function SvgBorderHeart(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.598 5.265a3.75 3.75 0 000 5.303L10 16.97l6.402-6.402a3.75 3.75 0 10-5.304-5.303L10 6.363 8.902 5.265a3.75 3.75 0 00-5.304 0v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBorderHeart;
