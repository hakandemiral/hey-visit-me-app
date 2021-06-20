import * as React from 'react';

function SvgAlignCenter(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 13h6v4H9v-4zM6 7h12v4H6V7z" fill="currentColor" />
    </svg>
  );
}

export default SvgAlignCenter;
