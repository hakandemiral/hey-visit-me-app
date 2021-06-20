import * as React from 'react';

function SvgZoomIn(props) {
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
        d="M10 10H7m14 11l-6-6 6 6zm-4-11a7.001 7.001 0 01-11.95 4.95A7 7 0 1117 10zm-7-3v3-3zm0 3v3-3zm0 0h3-3z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgZoomIn;
