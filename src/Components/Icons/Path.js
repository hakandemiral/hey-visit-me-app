import * as React from 'react';

function SvgPath(props) {
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
        d="M21.919 8.854c-.109-2.774-2.66-7.239-10.061-7.186-7.729.055-9.987 5.23-9.932 8.19.053 2.96 1.986 4.597 1.986 4.597l2.885-2.377s-1.225.104-1.225-2.325c0-3.703 4.436-4.65 7.266-4.598 2.83.053 5.063 2.338 5.102 4.121.038 1.744-.425 2.85-1.837 3.645-1.688.951-3.733.106-3.733.106l.028-5.97-3.815.023-.01 10.545s-.035.844-1.02.792c-.706-.036-1.599-.812-1.599-.812l.007 3.137s1.1.925 2.843.925c3.756 0 3.593-3.672 3.593-3.672v-2.069s.766.37 2.29.37c6.315 0 7.323-5.116 7.232-7.442z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPath;