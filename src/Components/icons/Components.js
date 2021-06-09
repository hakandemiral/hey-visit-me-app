import * as React from 'react';

function SvgComponents(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.757 6.343L12 2.1l4.242 4.243L12 10.586 7.757 6.343zm2.829 0L12 4.93l1.414 1.414L12 7.757l-1.414-1.414zM2.1 12l4.243-4.243L10.586 12l-4.243 4.242L2.1 12zm2.829 0l1.414-1.414L7.757 12l-1.414 1.414L4.93 12zM13.414 12l4.243 4.242L21.899 12l-4.242-4.243L13.414 12zm4.243-1.414L16.243 12l1.414 1.414L19.07 12l-1.414-1.414zM7.757 17.657L12 13.414l4.242 4.243L12 21.899l-4.243-4.242zm2.829 0L12 16.243l1.414 1.414L12 19.07l-1.414-1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgComponents;
