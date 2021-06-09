import * as React from 'react';

function SvgUser(props) {
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
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0v0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgUser;
