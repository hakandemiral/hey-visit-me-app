import * as React from 'react';

function SvgArrowsExpand(props) {
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
        d="M20 20h-4M4 8V4v4zm0-4h4-4zm0 0l5 5-5-5zm16 4V4v4zm0-4h-4 4zm0 0l-5 5 5-5zM4 16v4-4zm0 4h4-4zm0 0l5-5-5 5zm16 0l-5-5 5 5zm0 0v-4 4z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrowsExpand;
