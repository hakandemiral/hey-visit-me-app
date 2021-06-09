import * as React from 'react';

function SvgTriangle(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.66 5L3 20h17.32L11.66 5zm0 6l-3.464 6h6.928l-3.464-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTriangle;
