import * as React from 'react';

function SvgDigg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M152 176h48v160h-48zM224 176v160h80v48h-80v48h128V176H224zm80 112h-32v-64h32v64zM384 176v160h80v48h-80v48h128V176H384zm80 112h-32v-64h32v64zM80 80v96H0v160h128V80H80zm0 208H48v-64h32v64zM152 112h48v32h-48z" />
    </svg>
  );
}

export default SvgDigg;
