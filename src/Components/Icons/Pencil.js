import * as React from 'react';

function SvgPencil(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.693 4.36l2.947 2.947-2.947-2.947zm1.25-1.25a2.084 2.084 0 012.947 2.947L5.417 17.53H2.5v-2.977L13.943 3.11v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPencil;
