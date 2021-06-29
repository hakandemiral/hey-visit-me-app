import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TextInput from './TextInput';
import * as Icons from '../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .tags {
    width: 100%;
    display: flex;
    margin-top: 0.5rem;
    flex-wrap: wrap;
    user-select: none;

    .tag {
      color: ${theme.colors.bodyText};
      font: ${theme.typography.body.regular16};
      padding: 0.5rem 3rem 0.5rem 1rem;
      background-color: ${theme.colors.brandMoreLight};
      border-radius: 0.25rem;
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      
      &:not(:last-child) {
        margin-right: 1rem;
      }
      
      svg {
        position: absolute;
        right: 15px;
        cursor: pointer;
        
        &:hover {
          color: ${theme.colors.brand};
        }
      }
    }
  }
`);

const TagInput = ({
  label, icon, placeholder,
}) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter' && input !== '') {
      setTags([...tags, { id: tags.length, value: input }]);
      setInput('');
    }
  };

  const handleRemove = (id) => {
    const newTags = tags.filter((tag) => tag.id !== id);
    setTags(newTags);
  };

  return (
    <Wrapper className="tag-input">
      <TextInput
        name="tagInput"
        label={label}
        icon={icon}
        placeholder={placeholder}
        onKeyDown={(e) => handleEnter(e)}
        controlledInput={(value) => setInput(value)}
        value={input}
      />
      <div className="tags">
        {tags.map((item, index) => (
          <div key={item.id} className="tag">
            {item.value}
            <Icons.X onClick={() => handleRemove(item.id)} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

TagInput.propTypes = {
  label: propTypes.string,
  icon: propTypes.string,
  placeholder: propTypes.string,
};

TagInput.defaultProps = {
  label: null,
  icon: null,
  placeholder: null,
};

export default TagInput;
