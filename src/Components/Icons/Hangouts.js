import * as React from 'react';

function SvgHangouts(props) {
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
        d="M11.75 2C6.925 2 3 5.925 3 10.75c0 4.351 3.25 8.049 7.5 8.663V22h.625c4.994 0 9.375-5.258 9.375-11.25C20.5 5.925 16.574 2 11.75 2zM10.5 12.136s0 1.219-1.875 1.739V12H6.75V8.25h3.75v3.886zm6.25 0s0 1.219-1.875 1.739V12H13V8.25h3.75v3.886z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHangouts;
