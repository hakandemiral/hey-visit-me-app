import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  background-color: ${theme.colors.paper};
  filter: ${theme.filters.softShadow};
  cursor: pointer;
  transition: 150ms transform;
  flex: 0 0 20%;
  padding: 5% 0;
  
  .type {
    color: ${theme.colors.brand};
    font: ${theme.typography.body.regular20};
  }
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 40%;
    aspect-ratio: 1;
  }
  
  @media screen and (max-width: 1440px) {
    .type {
      font: ${theme.typography.body.regular16};
    }
  }
`);

const Card = ({ type, icon, ...props }) => (
  <Wrapper {...props}>
    <img src={icon} alt="Vector" />
    <div className="type">{type}</div>
  </Wrapper>
);

Card.propTypes = {
  type: propTypes.string.isRequired,
  icon: propTypes.any.isRequired,
};

export default Card;
