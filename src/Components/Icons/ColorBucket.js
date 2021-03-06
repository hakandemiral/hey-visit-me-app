import * as React from 'react';

function SvgColorBucket(props) {
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
        d="M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484-7.778 7.778a3 3 0 01-4.243 0L2.9 16.562a3 3 0 010-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957zm.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591.277 0 .5.264.5.591zm0 5.914V9.342l-4.39 4.391a1 1 0 000 1.414l4.243 4.243a1 1 0 001.414 0l6.364-6.364-5.63-5.63v3.48l-.003.128h-2.01a.698.698 0 00.012-.129z"
        fill="currentColor"
      />
      <path
        d="M16.859 16.875a3 3 0 104.242 0l-2.121-2.121-2.121 2.12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgColorBucket;
