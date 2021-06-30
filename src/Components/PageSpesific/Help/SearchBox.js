import React from 'react';
import styled, { css } from 'styled-components';
import { Search } from '../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  height: 3.5rem;
  position: relative;
  filter: ${theme.filters.softShadow};
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: ${theme.colors.paper};
  
  input[type="text"] {
    width: 100%;
    height: 100%;
    font: ${theme.typography.body.regular16};
    padding: 1rem 2rem;
    background: transparent;
    border: none;
    outline: none;
    color: ${theme.colors.bodyText};
    
    &::placeholder {
      color: ${theme.colors.placeholder};
    }
  }
  
  svg {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.brand};
    font-size: 1.5rem;
  }
`);

const SearchBox = ({ ...props }) => {
  return (
    <Wrapper className="help-search-box">
      <input
        type="text"
        placeholder="Search anything..."
        {...props}
      />
      <Search />
    </Wrapper>
  );
};

export default SearchBox;
