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
  padding: 11rem 0 4rem 0;
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
    margin-right: 0.5rem;
  }
`);

const Link = styled.a(({
  theme,
}) => css`
  text-decoration: none;
  margin-right: 3rem;
  transition: 100ms color;
  color: ${theme.colors.brand};

  &:visited {
    color: inherit;
  }
  
  &:hover {
    color: ${theme.colors.brandMoreLight};
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
      <Link href="#">Heyvisit.me 👋</Link>
    </Row>
  </Foot>
);

export default Footer;
