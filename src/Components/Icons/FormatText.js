import * as React from 'react';

function SvgFormatText(props) {
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
        d="M6.5 3H3v3.5h1V4h2.5V3zM8.5 4V3H11v1H8.5zM13 4h2.5V3H13v1zM17.5 3v1H20v2.5h1V3h-3.5zM21 8.5h-1V11h1V8.5zM21 13h-1v2.5h1V13zM21 17.5h-1V20h-2.5v1H21v-3.5zM15.5 21v-1H13v1h2.5zM11 21v-1H8.5v1H11zM6.5 21v-1H4v-2.5H3V21h3.5zM3 15.5h1V13H3v2.5zM3 11h1V8.5H3V11zM11 9.5H7v-2h10v2h-4v7h-2v-7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFormatText;
