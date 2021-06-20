import * as React from 'react';

function SvgAlignMiddle(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 9h4v6h-4V9zM7 6h4v12H7V6z" fill="currentColor" />
    </svg>
  );
}

export default SvgAlignMiddle;
