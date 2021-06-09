import * as React from 'react';

function SvgRefresh(props) {
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
        d="M4.582 9H4V4l.582 5zm0 0a8.001 8.001 0 0115.356 2M4.582 9H9m10.419 6H20v5l-.581-5zm0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgRefresh;
