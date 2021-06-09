import * as React from 'react';

function SvgTranslate(props) {
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
        d="M3 5h12M9 3v2m3.5 13h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129m7.048-3.629A18.022 18.022 0 016.412 9l3.636 5.5z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTranslate;
