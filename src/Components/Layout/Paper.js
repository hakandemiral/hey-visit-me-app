import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div(({
  theme, padding,
}) => css`
  background-color: ${theme.colors.paper};
  border-radius: 1rem;
  filter: ${theme.filters.softShadow};
  
  ${padding === 'narrow' && css`
    padding: 1rem;
  `}

  ${padding === 'large' && css`
    padding: 2rem;
  `}

  ${padding === 'wide' && css`
    padding: 1rem 2rem;
  `}
  
  ${padding === 'none' && css`
    padding: 0;
  `}
`);

const Paper = ({
  padding, children, ...props
}) => (
  <Wrapper
    padding={padding}
    {...props}
  >
    {children}
  </Wrapper>
);

Paper.propTypes = {
  padding: propTypes.oneOf(['narrow', 'large', 'none', 'wide']),
  children: propTypes.node.isRequired,
};

Paper.defaultProps = {
  padding: 'large',
};

export default Paper;
