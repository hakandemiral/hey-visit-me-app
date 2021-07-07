import * as React from 'react';

function SvgDigg(props) {
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
        d="M9.813 8.75H7.937V15h1.875V8.75zM10.75 8.75V15h3.125v1.875H10.75v1.875h5v-10h-5zm3.125 4.375h-1.25v-2.5h1.25v2.5zM17 8.75V15h3.125v1.875H17v1.875h5v-10h-5zm3.125 4.375h-1.25v-2.5h1.25v2.5zM5.125 5v3.75H2V15h5V5H5.125zm0 8.125h-1.25v-2.5h1.25v2.5zM9.813 6.25H7.937V7.5h1.875V6.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDigg;
