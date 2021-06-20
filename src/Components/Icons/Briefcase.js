import * as React from 'react';

function SvgBriefcase(props) {
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
        d="M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M12 12h.01M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2h8zM5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBriefcase;
