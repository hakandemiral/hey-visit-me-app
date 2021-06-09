import * as React from 'react';

function SvgCreateLink(props) {
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
        d="M16.75 13.25L18 12a4.243 4.243 0 10-6-6l-1.25 1.25M7.25 10.75L6 12a4.243 4.243 0 006 6l1.25-1.25M14.25 9.75l-4.5 4.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgCreateLink;
