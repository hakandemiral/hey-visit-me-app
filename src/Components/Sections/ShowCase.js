import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Container from '../Layout/Container';
import * as Icons from '../Icons';
import getShowCaseImages from '../../Helpers/getShowCaseImages';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  position: relative;
  margin: 8rem 0;
`);

const Heading = styled.div(({
  theme,
}) => css`
  color: ${theme.colors.brand};
  margin-bottom: 2rem;
  position: relative;

  h4 {
    font: ${theme.typography.heading.regular20};
    color: ${theme.colors.pink};
    margin-bottom: 0.5rem;
  }
  
  h5 {
    font: ${theme.typography.heading.medium32};
  }

  a.view-all {
    position: absolute;
    bottom: 0;
    right: 0;
    font: ${theme.typography.body.medium16};
    color: inherit;
    text-decoration: none;
  }
`);

const Slide = styled.div(({
  theme,
}) => css`
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  
  button {
    display: grid;
    place-items: center;
    position: absolute;
    right: -1%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 0.25rem;
    filter: ${theme.filters.softShadow};
    
    svg {
      font-size: 1.5rem;
      color: ${theme.colors.brand};
    }
    
    &:hover {
      filter: ${theme.filters.softShadow};
    }
  }
  
  img {
    @media screen and (max-width: 1330px) {
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }
`);

const ShowCase = ({ showCaseId }) => (
  <Container>
    <Wrapper>
      <Heading>
        <h4>Plain Card Templates</h4>
        <h5>Cards that don&apos;t compromise on simplicity but aren&apos;t boring either.</h5>
        <a className="view-all" href="#">View all (100)</a>
      </Heading>
      <Slide>
        {
          getShowCaseImages(showCaseId)
            .map((image) => <img key={image.default.slice(-8, -4)} src={image.default} alt="Example Card" />)
        }
        <button>
          <Icons.ChevronRight />
        </button>
      </Slide>
    </Wrapper>
  </Container>
);

ShowCase.propTypes = {
  showCaseId: propTypes.number.isRequired,
};

export default ShowCase;
