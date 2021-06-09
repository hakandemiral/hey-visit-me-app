import * as React from 'react';

function SvgFontSpacing(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 21h2V3h-2v18zM5 21H3V3h2v18z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.464 16.048L9.953 15h4.094l.489 1.048a1 1 0 101.813-.845l-3.381-7.25A1 1 0 0012 7.375a1 1 0 00-.967.576l-3.381 7.25a1 1 0 001.812.846zM12 10.61L10.885 13h2.23L12 10.61z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFontSpacing;
