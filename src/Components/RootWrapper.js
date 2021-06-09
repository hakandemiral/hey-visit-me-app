import React from 'react';
import styled from 'styled-components';

const RootWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
`;

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <RootWrapper>
    { children }
  </RootWrapper>
);
