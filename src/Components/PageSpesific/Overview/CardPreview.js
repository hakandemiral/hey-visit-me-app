import React from 'react';
import styled, { css } from 'styled-components';
import Paper from '../../Layout/Paper';
import Button from '../../Generic/Inputs/Button';

const Wrapper = styled(Paper)(({
  theme,
}) => css`
  .head {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    h3 {
      font: ${theme.typography.body.regular20};
      color: ${theme.colors.heading};
    }
  }
  
  .body {
    min-height: 15rem;
  }
`);

const CardPreview = () => (
  <Wrapper padding="large">
    <div className="head">
      <h3>Business Card</h3>
      <Button icon="DotsHorizontal" size="short" />
    </div>
    <div className="body">

    </div>
  </Wrapper>
);

export default CardPreview;
