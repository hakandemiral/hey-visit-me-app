import * as React from 'react';

function SvgNoConstrain(props) {
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
        d="M16.248 9.766V7.998a4.243 4.243 0 10-8.485 0v1.768M7.763 14.233v1.768a4.243 4.243 0 108.485 0v-1.768"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgNoConstrain;
