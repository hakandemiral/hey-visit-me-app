import * as React from 'react';

function SvgSemiCircle(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 16a8 8 0 10-16 0h3a5 5 0 0110 0h3z" fill="currentColor" />
    </svg>
  );
}

export default SvgSemiCircle;
