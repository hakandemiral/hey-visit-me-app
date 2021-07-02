import React from 'react';
import styled, { css } from 'styled-components';
import Paper from '../../../Layout/Paper';
import { Selector } from '../../../Icons';

const Wrapper = styled(Paper)(({
  theme,
}) => css`
  overflow: hidden;
  display: flex;
  align-items: center;
  
  .date-range {
    font: ${theme.typography.body.regular16};
    color: ${theme.colors.bodyText};
    padding: 1rem;
  }
`);

const SelectSide = styled.div(({
  theme,
}) => css`
  position: relative;
  border-right: solid 1px ${theme.colors.borderDivider};
  padding: 0 1rem;
  
  svg {
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    color: ${theme.colors.borderDivider};
  }
`);

const Select = styled.select(({
  theme,
}) => css`
  cursor: pointer;
  appearance: none;
  outline: none;
  border: none;
  width: 11rem;
  height: 3.5rem;
  padding-left: 1rem;
  background-color: transparent;
  color: ${theme.colors.bodyText};
`);

const Filter = () => (
  <Wrapper padding="none">
    <SelectSide>
      <Select>
        <option value="1">Last Week</option>
        <option value="2">Last Month</option>
        <option value="3">Last Year</option>
      </Select>
      <Selector />
    </SelectSide>
    <div className="date-range">22 January-28 January</div>
  </Wrapper>
);

export default Filter;
