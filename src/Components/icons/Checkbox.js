import * as React from 'react';

function SvgCheckbox(props) {
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
        d="M1 5a4 4 0 014-4h14a4 4 0 014 4v14a4 4 0 01-4 4H5a4 4 0 01-4-4V5zm4-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckbox;
