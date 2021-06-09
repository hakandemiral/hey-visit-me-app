import * as React from 'react';

function SvgEyeOff(props) {
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
        d="M17.411 17.411L21 21m-7.125-2.175c-.618.117-1.246.175-1.875.175-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971l9.855 9.854zM9.878 9.879a3 3 0 014.243 4.243L9.878 9.879zm0-.001l4.242 4.242-4.242-4.242zm.002.002L6.59 6.59l3.29 3.29zm4.242 4.242l3.29 3.29-3.29-3.29zM3 3l3.59 3.59L3 3zm3.59 3.59A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411L6.59 6.59z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgEyeOff;
