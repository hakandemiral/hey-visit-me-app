import * as React from 'react';

function SvgFlickr(props) {
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
        d="M17.625 16.2a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zM6.375 16.2a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlickr;
