import * as React from 'react';

function SvgFacebook(props) {
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
        d="M19.5 2h-15A2.503 2.503 0 002 4.5v15C2 20.879 3.121 22 4.5 22H12v-6.875H9.5V12H12V9.5a3.75 3.75 0 013.75-3.75h2.5v3.125H17c-.69 0-1.25-.065-1.25.625V12h3.125l-1.25 3.125H15.75V22h3.75c1.379 0 2.5-1.121 2.5-2.5v-15C22 3.121 20.879 2 19.5 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFacebook;
