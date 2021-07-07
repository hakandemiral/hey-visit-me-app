import * as React from 'react';

function SvgMessenger(props) {
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
        d="M11.642 1.667c-5.523 0-10 4.145-10 9.26 0 2.913 1.454 5.512 3.726 7.21v3.53L8.773 19.8c.909.251 1.872.387 2.869.387 5.523 0 10-4.145 10-9.258 0-5.114-4.477-9.26-10-9.26zm.994 12.47L10.09 11.42l-4.97 2.716 5.467-5.802 2.609 2.716 4.906-2.716-5.466 5.802z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessenger;
