import * as React from 'react';

function SvgDeviantart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M416 96V0h-96l-47.168 87.584A15.977 15.977 0 01258.752 96H96v128h76.608c12.096 0 19.84 12.928 14.08 23.584L96 416v96h96l47.168-87.584a15.977 15.977 0 0114.08-8.416H416V288h-76.608c-12.096 0-19.84-12.928-14.08-23.584L416 96z" />
    </svg>
  );
}

export default SvgDeviantart;
