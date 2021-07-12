import React from 'react';
import styled, { css } from 'styled-components';
import * as Icons from '../Icons';

const Foot = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.brand};
  font: ${theme.typography.body.regular16};
  padding: 8rem 0 4rem 0;
`);

const Row = styled.div(({
  theme,
}) => css`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: inherit;
  }
`);

const Link = styled.a(({
  theme,
}) => css`
  text-decoration: none;
  margin: 0 1.5rem;
  transition: 100ms color;
  color: ${theme.colors.brand};

  &:visited {
    color: inherit;
  }
  
  &:hover {
    color: ${theme.colors.purple};

    svg {
      color: ${theme.colors.purple};
    }
  }
`);

const Footer = () => (
  <Foot>
    <Row>
      <Link href="#">Contact</Link>
      <Link href="#">Help</Link>
      <Link href="#">Privacy & Terms</Link>
    </Row>
    <Row>
      <Icons.Copyright />
      <span>Heyvisit.me 👋</span>
    </Row>
  </Foot>
);

export default Footer;
