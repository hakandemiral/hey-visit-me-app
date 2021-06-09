import * as React from 'react';

function SvgUnderline(props) {
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
        d="M6 10V4h2v6a4 4 0 008 0V4h2v6a6 6 0 01-12 0zM7 18a1 1 0 100 2h10a1 1 0 100-2H7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnderline;
