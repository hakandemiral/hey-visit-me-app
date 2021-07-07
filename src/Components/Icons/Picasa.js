import * as React from 'react';

function SvgPicasa(props) {
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
        d="M17 3.349v12.4h4.266A9.95 9.95 0 0022 12c0-3.698-2.014-6.92-5-8.65zM12 2a9.945 9.945 0 00-3.425.615l7.175 6.696V2.734A9.95 9.95 0 0012 2zM8.25 17v4.266A9.95 9.95 0 0012 22c3.699 0 6.921-2.014 8.651-5h-12.4zM7.327 3.161A9.996 9.996 0 002 12c0 .881.125 1.732.34 2.546l8.44-8.163L7.328 3.16zM2.775 15.865A10.039 10.039 0 007 20.651V11.78l-4.225 4.086z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPicasa;
