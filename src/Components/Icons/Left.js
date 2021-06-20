import * as React from 'react';

function SvgLeft(props) {
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
        d="M4 5a1 1 0 000 2h16a1 1 0 100-2H4zM4 9a1 1 0 000 2h8a1 1 0 100-2H4zM3 14a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h8a1 1 0 100-2H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLeft;
