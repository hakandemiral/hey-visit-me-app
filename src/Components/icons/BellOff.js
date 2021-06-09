import * as React from 'react';

function SvgBellOff(props) {
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
        d="M5.75 14.125l1-2.125v-2c0-2.9 2.35-5.25 5.25-5.25 0 0 1.61 0 2.594.5m2.656 1.625V12l2 4.25H7.75l9.5-9.375zM9 16.75s0 2.5 3 2.5 3-2.5 3-2.5M19.25 4.75l-14.5 14.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBellOff;
