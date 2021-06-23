import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.background};
  scrollbar-base-color: aqua;
`;

const RootWrapper = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

RootWrapper.propTypes = {
  children: propTypes.node.isRequired,
};

export default RootWrapper;
