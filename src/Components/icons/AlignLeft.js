import * as React from 'react';

function SvgAlignLeft(props) {
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
        d="M8 13h6v4H8v-4zM6 6H4v12h2V6zM20 7H8v4h12V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlignLeft;
