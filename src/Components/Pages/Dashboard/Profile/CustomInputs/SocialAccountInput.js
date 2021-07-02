import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TextInput from '../../../../Generic/Inputs/TextInput';
import DropdownInput from '../../../../Generic/Inputs/DropdownInput';
import * as Icons from '../../../../Icons';

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
  }
  
  .action-button {
    position: absolute;
    font-size: 1.8rem;
    right: 30px;
    padding: 0.25rem;
    border: none;
    background-color: transparent;
    color: ${theme.colors.brand};
    cursor: pointer;
    
    &:not(:last-child) {
      margin-right: 4%;
    }
  }
`);

const SocialAccountInput = ({ field }) => {
  const [socialList, setSocialList] = useState(() => {
    if (field) {
      return field.value;
    }

    return [{ id: 0, network: '', userName: '' }];
  });

  useEffect(() => {
    if (field) field.onChange(socialList);
  }, [socialList]);

  const handleInputChange = (value, name, index) => {
    const list = [...socialList];
    list[index][name] = value === undefined ? '' : value;
    setSocialList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...socialList];
    list.splice(index, 1);
    setSocialList(list);
  };

  const handleAddClick = () => {
    setSocialList([...socialList, { id: socialList.length, network: '', userName: '' }]);
  };

  return (
    <Wrapper className="social-account-input">
      {
        socialList.map(({ id, network, userName }, i) => (
          <div key={id} className="row">

            <DropdownInput
              name="network"
              placeholder="Select one"
              options={[
                { title: 'Instagram', icon: 'Instagram' },
                { title: 'Facebook', icon: 'Facebook' },
                { title: 'Figma', icon: 'Figma' },
              ]}
              icon="Link"
              controlledInput={(value) => handleInputChange(value, 'network', i)}
              value={network}
            />

            <TextInput
              name="userName"
              placeholder="@stevejobs"
              value={userName}
              onChange={({ target: { value } }) => handleInputChange(value, 'userName', i)}
            />

            {
              socialList.length - 1 === i && (
                <Icons.Plus
                  className="action-button"
                  onClick={handleAddClick}
                />
              )
            }

            {
              socialList.length !== 1 && (
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

SocialAccountInput.propTypes = {
  field: propTypes.any.isRequired,
};

export default SocialAccountInput;
