import * as React from 'react';

function SvgFlickr(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx={400} cy={256} r={112} />
      <circle cx={112} cy={256} r={112} />
    </svg>
  );
}

export default SvgFlickr;
