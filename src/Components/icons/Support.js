import * as React from 'react';

function SvgSupport(props) {
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
        d="M18.364 5.636l-3.536 3.536 3.536-3.536zm-3.536 9.192l3.536 3.536-3.536-3.536zM9.172 9.172L5.636 5.636l3.536 3.536zm0 5.656l-3.536 3.536 3.536-3.536zM21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0v0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSupport;
