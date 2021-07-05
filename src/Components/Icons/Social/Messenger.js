import * as React from 'react';

function SvgMessenger(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M256 0C114.624 0 0 106.112 0 237.024c0 74.592 37.216 141.12 95.392 184.576V512l87.168-47.84c23.264 6.432 47.904 9.92 73.44 9.92 141.376 0 256-106.112 256-237.024S397.376 0 256 0zm25.44 319.2l-65.184-69.536-127.2 69.536 139.936-148.544 66.784 69.536 125.6-69.536L281.44 319.2z" />
    </svg>
  );
}

export default SvgMessenger;
