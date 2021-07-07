import * as React from 'react';

function SvgDislike(props) {
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
        d="M21.945 8.996L19.94 4.485A2.5 2.5 0 0017.656 3H7.627A.625.625 0 007 3.625v8.75c0 .109.028.215.083.31L9.5 16.916v2.959c0 .345.28.625.625.625H12c1.38 0 2.5-1.121 2.5-2.5v-3.75h5c1.379 0 2.5-1.121 2.5-2.5v-2.5a.615.615 0 00-.055-.254zM2.625 3A.625.625 0 002 3.625v8.75c0 .345.28.625.625.625H5.75V3H2.625z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDislike;
