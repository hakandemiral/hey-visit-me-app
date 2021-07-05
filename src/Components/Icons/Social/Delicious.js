import * as React from 'react';

function SvgDelicious(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 448"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M224 0h224v224H224zM0 224h224v224H0z" />
    </svg>
  );
}

export default SvgDelicious;
