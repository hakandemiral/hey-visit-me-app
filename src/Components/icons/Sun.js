import * as React from 'react';

function SvgSun(props) {
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
        d="M12 3v1-1zm0 17v1-1zm9-8h-1 1zM4 12H3h1zm14.364 6.364l-.707-.707.707.707zM6.343 6.343l-.707-.707.707.707zm12.021-.707l-.707.707.707-.707zM6.343 17.657l-.707.707.707-.707zM16 12a4 4 0 11-8 0 4 4 0 018 0v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSun;
