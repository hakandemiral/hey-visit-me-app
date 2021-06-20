import * as React from 'react';

function SvgScissors(props) {
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
        d="M14.121 14.121L19 19l-4.879-4.879zM12 12l7-7-7 7zm0 0l-2.879 2.879L12 12zm0 0L9.121 9.121 12 12zm-2.879 2.879a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243v0zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgScissors;
