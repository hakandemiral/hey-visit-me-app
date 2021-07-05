import * as React from 'react';

function SvgXing(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M496 0H376.384L198.688 311.264 313.184 512H432.8L318.304 311.264zM149.216 96H36.448l65.248 114.912L16 352h112.768l85.696-141.088z" />
    </svg>
  );
}

export default SvgXing;
