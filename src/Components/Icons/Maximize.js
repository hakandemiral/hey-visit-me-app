import * as React from 'react';

function SvgMaximize(props) {
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
        d="M4.75 14.75v2.5a2 2 0 002 2h2.5M19.25 14.75v2.5a2 2 0 01-2 2h-2.5M19.25 9.25v-2.5a2 2 0 00-2-2h-2.5M4.75 9.25v-2.5a2 2 0 012-2h2.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMaximize;
