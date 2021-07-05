import * as React from 'react';

function SvgMyspace(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M400 224c-31.36 0-59.648 13.024-80 33.856V256c0-52.928-43.072-96-96-96-31.136 0-58.56 15.136-76.128 38.176C133.76 175.36 108.736 160 80 160c-44.096 0-80 35.904-80 80v112h128v64h160v96h224V336c0-61.76-50.24-112-112-112z" />
      <circle cx={400} cy={96} r={96} />
      <circle cx={224} cy={80} r={64} />
      <circle cx={80} cy={96} r={48} />
    </svg>
  );
}

export default SvgMyspace;
