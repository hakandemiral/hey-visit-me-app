import * as React from 'react';

function SvgUserAdd(props) {
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
        d="M18 9v3-3zm0 3v3-3zm0 0h3-3zm0 0h-3 3zm-5-5a4 4 0 11-8 0 4 4 0 018 0v0zM3 20a6 6 0 1112 0v1H3v-1z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgUserAdd;
