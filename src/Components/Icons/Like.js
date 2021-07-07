import * as React from 'react';

function SvgLike(props) {
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
        d="M19.5 9.429h-5V5.57C14.5 4.153 13.379 3 12 3h-1.875a.634.634 0 00-.625.643v3.043l-2.418 4.352a.647.647 0 00-.082.32v9c0 .354.28.642.625.642h10.031c.988 0 1.885-.6 2.284-1.527l2.005-4.64A.648.648 0 0022 14.57V12c0-1.418-1.121-2.571-2.5-2.571zM2.625 10.714a.634.634 0 00-.625.643v9c0 .355.28.643.625.643H5.75V10.714H2.625z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLike;
