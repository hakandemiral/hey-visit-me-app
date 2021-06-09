import * as React from 'react';

function SvgSwitchHorizontal(props) {
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
        d="M4 17l4-4m0-6h12H8zm12 0l-4-4 4 4zm0 0l-4 4 4-4zm-4 10H4h12zM4 17l4 4-4-4z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSwitchHorizontal;
