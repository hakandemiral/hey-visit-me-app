import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Minus, Plus } from '../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  min-height: 3.5rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.paper};
  transition: 800ms max-height ease;
  margin-bottom: 2rem;
  
  .title {
    width: 100%;
    min-height: 3.5rem;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    color: ${theme.colors.bodyText};
    font: ${theme.typography.body.medium16};
    user-select: none;

    .indicator {
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      box-shadow: ${theme.filters.innerBoxShadow};
      display: grid;
      place-items: center;
      border-radius: 0.5rem;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);

      svg {
        color: ${theme.colors.brand};
        font-size: 1.5rem;
      }
    }
  }
  
  .body {
    display: none;
    padding: 0 2rem;
    font: ${theme.typography.body.regular16};
    color: ${theme.colors.bodyText};
  }
  
  &.expanded {
    padding-bottom: 1rem;
    .title {
      color: ${theme.colors.brand};
    }
    
    .body {
      display: block;
    }
  }
`);

const Accordion = ({ title, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper className={isExpanded && 'expanded'}>

      <div className="title" onClick={() => setIsExpanded(!isExpanded)}>
        {title}
        <div className="indicator">
          {isExpanded ? <Minus /> : <Plus />}
        </div>

      </div>

      <div className="body">
        {body}
      </div>
    </Wrapper>
  );
};

Accordion.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
};

export default Accordion;
