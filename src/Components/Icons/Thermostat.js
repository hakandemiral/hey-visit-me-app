import * as React from 'react';

function SvgThermostat(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 19a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 14a5 5 0 11-6 0V4a3 3 0 116 0v10zM13 4v11.17A3.001 3.001 0 0112 21a3 3 0 01-1-5.83V4a1 1 0 112 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThermostat;
