import * as React from 'react';

function SvgHangouts(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M256 0C132.48 0 32 100.48 32 224c0 111.392 83.2 206.048 192 221.76V512h16c127.84 0 240-134.592 240-288C480 100.48 379.488 0 256 0zm-32 259.488s0 31.2-48 44.512v-48h-48v-96h96v99.488zm160 0s0 31.2-48 44.512v-48h-48v-96h96v99.488z" />
    </svg>
  );
}

export default SvgHangouts;
