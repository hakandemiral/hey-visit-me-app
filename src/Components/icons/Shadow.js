import * as React from 'react';

function SvgShadow(props) {
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
        d="M15.306 6.992A6 6 0 1015.318 17H12v-1h4.472c.519-.58.926-1.26 1.19-2.008H12v-1h5.918a6.038 6.038 0 00.003-1.966H12v-1h5.668a5.996 5.996 0 00-1.203-2.034H12v-1h3.306z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10 8a8 8 0 100-16 8 8 0 000 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShadow;
