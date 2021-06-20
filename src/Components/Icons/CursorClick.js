import * as React from 'react';

function SvgCursorClick(props) {
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
        d="M6.171 11.828l-2.12 2.122M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5-5-5zM7.188 2.239l.777 2.897-.777-2.897zM5.136 7.965l-2.898-.777 2.898.777zM13.95 4.05l-2.122 2.122L13.95 4.05z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgCursorClick;
