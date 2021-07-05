import * as React from 'react';

function SvgRss(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 448"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx={64} cy={384} r={64} />
      <path d="M0 149.344v85.344c117.632 0 213.344 95.68 213.344 213.312h85.312c0-164.672-133.984-298.656-298.656-298.656z" />
      <path d="M0 0v85.344C200 85.344 362.688 248 362.688 448H448C448 200.96 247.04 0 0 0z" />
    </svg>
  );
}

export default SvgRss;
