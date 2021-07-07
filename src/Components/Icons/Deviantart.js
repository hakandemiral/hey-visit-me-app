import * as React from 'react';

function SvgDeviantart(props) {
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
        d="M18.5 5.75V2h-3.75l-1.842 3.421a.624.624 0 01-.55.329H6v5h2.993c.472 0 .775.505.55.921L6 18.25V22h3.75l1.843-3.421a.624.624 0 01.55-.329H18.5v-5h-2.992a.625.625 0 01-.55-.921L18.5 5.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDeviantart;
