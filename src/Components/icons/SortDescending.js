import * as React from 'react';

function SvgSortDescending(props) {
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
        d="M17 20l4-4M3 4h13H3zm0 4h9-9zm0 4h9-9zm14-4v12V8zm0 12l-4-4 4 4z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSortDescending;
