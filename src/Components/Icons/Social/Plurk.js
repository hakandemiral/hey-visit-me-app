import * as React from 'react';

function SvgPlurk(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M32 0v512h128V384h320V0H32zm320 256H160V128h192v128z" />
    </svg>
  );
}

export default SvgPlurk;
