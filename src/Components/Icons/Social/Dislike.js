import * as React from 'react';

function SvgDislike(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M510.592 185.504L459.264 70.016C449.056 46.944 426.08 32 400.8 32H144c-8.832 0-16 7.168-16 16v224c0 2.784.704 5.504 2.112 7.936L192 388.256V464c0 8.832 7.168 16 16 16h48c35.296 0 64-28.704 64-64v-96h128c35.296 0 64-28.704 64-64v-64c0-2.24-.48-4.448-1.408-6.496zM16 32C7.168 32 0 39.168 0 48v224c0 8.832 7.168 16 16 16h80V32H16z" />
    </svg>
  );
}

export default SvgDislike;
