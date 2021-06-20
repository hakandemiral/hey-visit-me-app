import * as React from 'react';

function SvgCircle(props) {
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
        d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 3a8 8 0 100-16 8 8 0 000 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircle;
