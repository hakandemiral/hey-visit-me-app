import * as React from 'react';

function SvgWattpad(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M384 48v288h-64V48H192v288h-32c-17.632 0-32-14.336-32-32V48H0v256c0 88.224 71.776 160 160 160h352V48H384z" />
    </svg>
  );
}

export default SvgWattpad;
