import * as React from 'react';

function SvgOpacity(props) {
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
        d="M12 1.136L5.636 7.5a9 9 0 007.227 15.323A9 9 0 0018.364 7.5L12 1.136zM7.05 8.914L12 3.964v16.9a7 7 0 01-4.95-11.95z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOpacity;
