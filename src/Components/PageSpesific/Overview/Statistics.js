import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../../Layout/Container';
import UserInfo from './UserInfo';
import CardPreview from './CardPreview';

const Statistics = () => (
  <Container>
    <UserInfo />
    <CardPreview />
  </Container>
);

export default Statistics;
