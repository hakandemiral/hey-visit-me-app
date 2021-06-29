import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  align-items: center;
`);

const Box = styled.input(({
  theme,
}) => css`
  appearance: none;
  width: 1.35rem;
  height: 1.35rem;
  border: 2px solid ${theme.colors.brand};
  border-radius: 4px;
  margin-right: 0.5rem;
  background-repeat: no-repeat;
  background-position: 60%;
  cursor: pointer;

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.2426 9.31343L0 5.07072L1.41421 3.65653L4.2426 6.48502L9.8995 0.828125L11.3137 2.24235L4.2426 9.31343Z' fill='%236F96B6'/%3E%3C/svg%3E%0A");
  }
`);

const Label = styled.label(({
  theme,
}) => css`
  font: ${theme.typography.body.regular16};
  color: ${theme.colors.bodyText};
  cursor: pointer;
  user-select: none;
`);

const Checkbox = ({
  label, hookForm, name, controlledComponent, value,
}) => {
  const [checked, setChecked] = useState(value || false);

  useEffect(() => {
    if (controlledComponent) {
      controlledComponent(checked);
    }
  }, [checked]);

  return (
    <Wrapper>
      <Box
        id={name}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        {...hookForm}
      />
      <Label htmlFor={name}>{label}</Label>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  label: propTypes.string.isRequired,
  hookForm: propTypes.any,
  name: propTypes.string.isRequired,
  controlledComponent: propTypes.func,
  value: propTypes.bool,
};

Checkbox.defaultProps = {
  hookForm: null,
  controlledComponent: null,
  value: false,
};

export default Checkbox;
