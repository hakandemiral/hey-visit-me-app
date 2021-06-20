import * as React from 'react';

function SvgTwiter(props) {
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
        d="M8 3a2 2 0 012 2v3h6a2 2 0 110 4h-6v2a3 3 0 003 3h3a2 2 0 110 4h-3a7 7 0 01-7-7V5a2 2 0 012-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwiter;
