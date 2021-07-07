import * as React from 'react';

function SvgTwitch(props) {
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
        d="M4.25 2L3 5.75V19.5h5V22h2.5l2.5-2.5h3.75l5-5.325V2H4.25zM20.5 13.25L17 17h-4.432l-2.693 1.959V17H5.5V3.25h15v10z"
        fill="currentColor"
      />
      <path
        d="M13 7h-1.25v5H13V7zM16.75 7H15.5v5h1.25V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwitch;
