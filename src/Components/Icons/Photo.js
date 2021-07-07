import * as React from 'react';

function SvgPhoto(props) {
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
        d="M7 7l-5 5h7.5l1.875-.625L12 9.5V7H7zM11.375 12.625L9.5 12H7v5l5 5v-7.5l-.625-1.875zM14.5 12l-1.875.625L12 14.5V17h5l5-5h-7.5zM12 2v7.5l.625 1.875L14.5 12H17V7l-5-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPhoto;
