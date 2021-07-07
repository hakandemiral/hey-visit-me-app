import * as React from 'react';

function SvgRss(props) {
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
        d="M4.857 22a2.857 2.857 0 100-5.714 2.857 2.857 0 000 5.714z"
        fill="currentColor"
      />
      <path
        d="M2 8.667v3.81c5.251 0 9.524 4.272 9.524 9.523h3.809C15.333 14.65 9.35 8.667 2 8.667z"
        fill="currentColor"
      />
      <path
        d="M2 2v3.81c8.929 0 16.191 7.262 16.191 16.19H22C22 10.972 13.029 2 2 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRss;
