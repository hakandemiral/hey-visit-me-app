import * as React from 'react';

function SvgLike(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M448 192H320V96c0-35.296-28.704-64-64-64h-48c-8.832 0-16 7.168-16 16v75.744l-61.888 108.32A15.763 15.763 0 00128 240v224c0 8.832 7.168 16 16 16h256.8c25.28 0 48.256-14.944 58.464-38.016l51.328-115.488A15.719 15.719 0 00512 320v-64c0-35.296-28.704-64-64-64zM16 224c-8.832 0-16 7.168-16 16v224c0 8.832 7.168 16 16 16h80V224H16z" />
    </svg>
  );
}

export default SvgLike;
