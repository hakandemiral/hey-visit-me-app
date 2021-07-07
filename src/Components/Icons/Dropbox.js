import * as React from 'react';

function SvgDropbox(props) {
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
        d="M16.116 2L12 5.464l5.933 3.691L22 5.872 16.116 2zM7.884 2L2 5.871l4.069 3.284L12 5.464 7.884 2zM2 12.439l5.884 3.872L12 12.848 6.067 9.155 2 12.439zM17.931 9.155L12 12.848l4.116 3.463L22 12.44l-4.069-3.284z"
        fill="currentColor"
      />
      <path
        d="M16.414 17.611a.62.62 0 01-.745-.044l-3.67-3.087-3.668 3.087a.627.627 0 01-.746.044L5.75 16.404v1.846L12.012 22l6.238-3.75v-1.848l-1.836 1.21z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDropbox;
