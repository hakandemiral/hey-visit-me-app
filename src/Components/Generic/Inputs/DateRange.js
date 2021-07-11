import React, { useEffect, useState } from 'react';
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
  margin: 2rem 0 4rem 0;
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    
    h4 {
      width: 100%;
      font: ${theme.typography.heading.regular16};
      color: ${theme.colors.heading};
      margin: 0;
    }
  }
  
  .actions {
    margin-left: 1.5rem;
  }
`);

const DateRange = ({
  label, name, checkboxLabel, fields,
}) => {
  const [state, setState] = useState(() => {
    if (fields) {
      return fields.value || {};
    }

    return {};
  });

  const handleCurentWorking = (value) => {
    const newState = {
      ...state,
      currentWorking: value,
    };
    setState(newState);
  };

  const handleDates = (date) => {
    setState({ ...state, [date.type]: date.value });
  };

  useEffect(() => {
    if (fields) {
      fields.onChange(state);
      console.log(state);
    }
  }, [state]);

  return (
    <Wrapper>

      <div className="row">
        <h4>Start</h4>
        <DropdownInput
          name={`${name}-dropdown-input`}
          placeholder="Month"
          label="Month"
          options={[
            { title: 'January', value: 'January' },
            { title: 'February', value: 'February' },
            { title: 'March', value: 'March' },
            { title: 'April', value: 'April' },
            { title: 'May', value: 'May' },
            { title: 'June', value: 'June' },
            { title: 'July', value: 'July' },
            { title: 'August', value: 'August' },
            { title: 'September', value: 'September' },
            { title: 'October', value: 'October' },
            { title: 'November', value: 'November' },
            { title: 'December', value: 'December' },
          ]}
          controlledInput={(value) => handleDates({ type: 'startMonth', value })}
          value={state.startMonth}
        />

        <TextInput
          name={`${name}-text-input`}
          placeholder="Year"
          label="Year"
          controlledInput={(value) => handleDates({ type: 'startYear', value })}
          value={state.startYear}
        />
      </div>

      {
        !state.currentWorking && (
          <div className="row">
            <h4>End</h4>
            <DropdownInput
              name={`${name}-dropdown-input`}
              placeholder="Month"
              label="Month"
              options={[
                { title: 'January', value: 'January' },
                { title: 'February', value: 'February' },
                { title: 'March', value: 'March' },
                { title: 'April', value: 'April' },
                { title: 'May', value: 'May' },
                { title: 'June', value: 'June' },
                { title: 'July', value: 'July' },
                { title: 'August', value: 'August' },
                { title: 'September', value: 'September' },
                { title: 'October', value: 'October' },
                { title: 'November', value: 'November' },
                { title: 'December', value: 'December' },
              ]}
              controlledInput={(value) => handleDates({ type: 'endMonth', value })}
              value={state.endMonth}
            />

            <TextInput
              name={`${name}-text-input`}
              placeholder="Year"
              label="Year"
              controlledInput={(value) => handleDates({ type: 'endYear', value })}
              value={state.endYear}
            />
          </div>
        )
      }

      {/*<input*/}
      {/*  type="checkbox"*/}
      {/*  defaultChecked={state.currentWorking}*/}
      {/*  onChange={() => handleCurentWorking(!state.currentWorking)}*/}
      {/*/>*/}

      <div className="actions">
        <Checkbox
          label={checkboxLabel}
          name={name}
          defaultChecked={state.currentWorking}
          checked={state.currentWorking}
          onChange={() => handleCurentWorking(!state.currentWorking)}
        />
      </div>

      {/*<div className="actions">*/}
      {/*  <Checkbox*/}
      {/*    label={checkboxLabel}*/}
      {/*    name={name}*/}
      {/*    controlledComponent={handleCurentWorking}*/}
      {/*    value={state.curentWorking}*/}
      {/*  />*/}
      {/*</div>*/}

    </Wrapper>
  );
};

DateRange.propTypes = {
  label: propTypes.string,
  name: propTypes.string.isRequired,
  checkboxLabel: propTypes.string,
  fields: propTypes.any,
};

DateRange.defaultProps = {
  label: '',
  checkboxLabel: '',
  fields: null,
};

export default DateRange;
