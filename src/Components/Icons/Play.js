import * as React from 'react';

function SvgPlay(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18a8 8 0 100-16.001A8 8 0 0010 18zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a.998.998 0 000-1.664l-3-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlay;
