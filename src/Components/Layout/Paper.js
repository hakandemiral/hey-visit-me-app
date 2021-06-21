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
  padding: propTypes.oneOf(['narrow', 'large']),
  children: propTypes.element,
};

Paper.defaultProps = {
  padding: 'large',
  children: null,
};

export default Paper;
