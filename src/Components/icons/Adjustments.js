import * as React from 'react';

function SvgAdjustments(props) {
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
        d="M12 6V4m0 2a2 2 0 000 4m0-4a2 2 0 010 4m0 0v10m-6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m12 14a2 2 0 000-4m0 4a2 2 0 010-4m0 4v2m0-6V4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgAdjustments;
