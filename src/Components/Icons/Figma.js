import * as React from 'react';

function SvgFigma(props) {
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
        d="M8.5 2a3 3 0 000 6h7a3 3 0 100-6h-7zM15.5 9a3 3 0 100 6 3 3 0 000-6zM5.5 12a3 3 0 013-3h3v6h-3a3 3 0 01-3-3zM8.5 16a3 3 0 103 3v-3h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFigma;
