import * as React from 'react';

function SvgAnnouncements(props) {
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
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15m0 0A3.999 3.999 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7c-.537 0-1.07-.108-1.564-.318zM18 13a3 3 0 000-6v6z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgAnnouncements;
