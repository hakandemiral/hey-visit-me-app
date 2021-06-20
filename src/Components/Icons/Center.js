import * as React from 'react';

function SvgCenter(props) {
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
        d="M4 5a1 1 0 000 2h16a1 1 0 100-2H4zM4 13a1 1 0 100 2h16a1 1 0 100-2H4zM6 10a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM7 17a1 1 0 100 2h10a1 1 0 100-2H7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCenter;
