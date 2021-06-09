import * as React from 'react';

function SvgCopyright(props) {
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
        d="M13.392 10.436l1.419-1.418a4 4 0 10.176 5.798l-1.313-1.313h-.21a2 2 0 11-.073-3.067z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 110 14 7 7 0 010-14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCopyright;
