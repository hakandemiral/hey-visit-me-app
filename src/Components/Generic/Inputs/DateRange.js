import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Checkbox from './Checkbox';
import DropdownInput from './DropdownInput';
import TextInput from './TextInput';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    
    h4 {
      width: 100%;
      font: ${theme.typography.heading.regular16};
      color: ${theme.colors.heading};
    }
  }
  
  .actions {
    margin-left: 1.5rem;
  }
`);

const DateRange = ({
  label, name, checkboxLabel,
}) => {
  const [checked, setChecked] = useState();
  const handleCheckbox = (value) => {
    setChecked(value);
  };

  return (
    <Wrapper>

      <div className="row">
        <h4>Start</h4>
        <DropdownInput
          name={`${name}-dropdown-input`}
          placeholder="Month"
          label="Month"
          options={[
            { title: 'January' },
            { title: 'February' },
            { title: 'March' },
            { title: 'April' },
            { title: 'May' },
            { title: 'June' },
            { title: 'July' },
            { title: 'August' },
            { title: 'September' },
            { title: 'October' },
            { title: 'November' },
            { title: 'December' },
          ]}
        />

        <TextInput
          name={`${name}-text-input`}
          placeholder="Year"
          label="Year"
        />
      </div>

      {
        !checked && (
          <div className="row">
            <h4>End</h4>
            <DropdownInput
              name={`${name}-dropdown-input`}
              placeholder="Month"
              label="Month"
              options={[
                { title: 'January' },
                { title: 'February' },
                { title: 'March' },
                { title: 'April' },
                { title: 'May' },
                { title: 'June' },
                { title: 'July' },
                { title: 'August' },
                { title: 'September' },
                { title: 'October' },
                { title: 'November' },
                { title: 'December' },
              ]}
            />

            <TextInput
              name={`${name}-text-input`}
              placeholder="Year"
              label="Year"
            />
          </div>
        )
      }

      {
        checkboxLabel && (
          <div className="actions">
            <Checkbox
              label={checkboxLabel}
              name={name}
              controlledComponent={handleCheckbox}
            />
          </div>
        )
      }

    </Wrapper>
  );
};

DateRange.propTypes = {
  label: propTypes.string,
  name: propTypes.string.isRequired,
  checkboxLabel: propTypes.string,
};

DateRange.defaultProps = {
  label: '',
  checkboxLabel: '',
};

export default DateRange;
