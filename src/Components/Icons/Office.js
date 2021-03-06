import * as React from 'react';

function SvgOffice(props) {
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
        d="M10 21h4m5 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16h14zm0 0h2-2zm0 0h-5 5zM5 21H3h2zm0 0h5-5zM9 7h1-1zm0 4h1-1zm5-4h1-1zm0 4h1-1zm-4 10v-5a1 1 0 011-1h2a1 1 0 011 1v5h-4z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgOffice;
