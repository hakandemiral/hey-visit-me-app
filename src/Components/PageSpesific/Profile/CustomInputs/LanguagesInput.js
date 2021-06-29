import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TextInput from '../../../Generic/Inputs/TextInput';
import DropdownInput from '../../../Generic/Inputs/DropdownInput';
import Button from '../../../Generic/Inputs/Button';
import * as Icons from '../../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    &.firstRow .action-button {
      margin-top: 1.8rem;
    }
    
    .text-input, .dropdown-input {
      width: 45%;
      margin: 1rem;
    }
  }
  
  .action-button {
    position: absolute;
    right: 60px;
    padding: 0.25rem;
    font-size: 1.8rem;
    border: none;
    background-color: transparent;
    color: ${theme.colors.brand};
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`);

const LanguagesInput = ({ field }) => {
  const [languagesList, setLanguagesList] = useState(() => {
    if (field) {
      return field.value;
    }

    return [{ id: 0, language: '', level: '' }];
  });

  useEffect(() => {
    if (field) field.onChange(languagesList);
  }, [languagesList]);

  const handleInputChange = (value, name, index) => {
    const list = [...languagesList];
    list[index][name] = value === undefined ? '' : value;
    setLanguagesList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...languagesList];
    list.splice(index, 1);
    setLanguagesList(list);
  };

  const handleAddClick = () => {
    setLanguagesList([...languagesList, { id: languagesList.length, language: '', level: '' }]);
  };

  return (
    <Wrapper className="social-account-input">
      {
        languagesList.map(({ id, language, level }, i) => (
          <div key={id} className={`row${i === 0 ? ' firstRow' : ''}`}>

            <TextInput
              label={i === 0 && 'Language'}
              icon="Translate"
              name="language"
              placeholder="English"
              value={language}
              onChange={({ target: { value } }) => handleInputChange(value, 'language', i)}
            />

            <DropdownInput
              label={i === 0 && 'Level'}
              name="level"
              placeholder="Select one"
              options={[
                { title: 'A1' },
                { title: 'A2' },
                { title: 'B1' },
                { title: 'B2' },
                { title: 'C1' },
                { title: 'C2' },
                { title: 'Native' },
              ]}
              controlledInput={(value) => handleInputChange(value, 'level', i)}
              value={level}
            />

            {
              languagesList.length - 1 === i && (
                <Icons.Plus
                  className="action-button"
                  onClick={handleAddClick}
                />
              )
            }

            {
              languagesList.length !== 1 && (
                <Icons.Trash
                  className="action-button"
                  onClick={() => handleRemoveClick(i)}
                />
              )
            }

          </div>
        ))
      }
    </Wrapper>
  );
};

LanguagesInput.propTypes = {
  field: propTypes.any.isRequired,
};

export default LanguagesInput;
