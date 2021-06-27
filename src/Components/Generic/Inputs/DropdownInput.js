import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import * as Icons from '../../Icons';

const DropDown = styled.div(({
  theme, label, disabled, error, selected, listing,
}) => css`
  /* Generic */
  width: 100%;
  height: 5.5rem;
  position: relative;

  ${label && css`
    & span.label {
      display: inline-block;
      margin-bottom: 0.35rem;
      color: ${theme.colors.heading};
      font: ${theme.typography.body.regular16};
    }
  `}
  
  .box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    background-color: ${theme.colors.paper};
    border: solid 0.05rem ${theme.colors.borderDivider};
    border-radius: 0.5rem;
    position: relative;
    transition: 100ms color, 100ms box-shadow;
    overflow: hidden;
    padding: 1rem;
    color: ${theme.colors.placeholder};
    font: ${theme.typography.body.regular16};
    cursor: pointer;

    svg {
      margin-right: 0.5rem;
      font-size: 24px;
      color: ${theme.colors.borderDivider};
      
      &.selector-icon {
        margin-left: auto;
        margin-right: 0 !important;
      }
    }
    
    &:hover {
      filter: ${theme.filters.softShadow};
    }
    
    ${listing && css`
      box-shadow: 0 0 0 0.15rem ${theme.colors.brand};
      border-color: transparent;
      svg {
        color: ${theme.colors.brand};
      }
    `}

    ${selected && css`
      color: ${theme.colors.bodyText};
    `}
  }
  
  .list {
    position: absolute;
    width: 100%;
    border: solid 0.05rem ${theme.colors.borderDivider};
    border-radius: 0.5rem;
    background-color: ${theme.colors.dropDown10};
    backdrop-filter: blur(32px);
    margin-top: 0.25rem;
    padding: 1rem;
    max-height: 26rem;
    overflow: hidden;
    overflow-scrolling: auto;
    transition: 250ms max-height;
    z-index: 99;
    
    &.hidden {
      max-height: 0;
      visibility: hidden;
    }
    
    .item {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1rem 0.5rem;
      cursor: pointer;
      margin-bottom: 0.5rem;
      transition: 110ms color, 110ms background-color;
      color: ${theme.colors.bodyText};
      border-radius: 0.5rem;
      user-select: none;
      
      &:hover {
        background-color: ${theme.colors.brandMoreLight};
        color: ${theme.colors.brand};
        
        svg {
          color: ${theme.colors.brand}
        }
      }
      
      svg {
        margin-right: 0.5rem;
        color: ${theme.colors.borderDivider};
        font-size: 24px;
      }
    }
    
    .search {
      padding: 0;
      border: 0.05rem solid ${theme.colors.borderDivider};
      
      input {
        width: 100%;
        height: 100%;
        padding: 1rem 0.5rem;
        background-color: transparent;
        border: none;
        outline: none;
        color: ${theme.colors.placeholder};
        font: ${theme.typography.body.regular16}
      }
      
      &:hover {
        background-color: inherit;
      }
      
      svg {
        margin-left: 1rem;
      }
    }
  }
  
  /* If Error */
  ${error && css`
    .box {
      box-shadow: 0 0 0 0.15rem ${theme.colors.red};
      border-color: transparent;
      svg {
        color: ${theme.colors.red};
      }
    }
  `}
  
  /* If disabled */
  ${disabled && css`
    .box {
      color: ${theme.colors.borderDivider};
      cursor: not-allowed;
      &:hover {
        filter: none;
      }
    }
  `}
  
  .reference-select {
    display: block;
  }
`);

const DropdownInput = ({
  placeholder, icon, label, error, disabled, value, options, searchable, field, name,
}) => {
  const [selected, setSelected] = useState(() => (
    options.find((item) => item.title === value) || false
  ));
  const [listing, setListing] = useState(false);
  const [search, setSearch] = useState('');

  const handleSelect = (item) => {
    setSelected(item);
    setListing(false);
  };

  useEffect(() => {
    if (field) field.onChange(selected.title);
  }, [selected]);

  return (
    <DropDown
      label={label}
      error={Boolean(error[name])}
      disabled={disabled}
      selected={selected}
      listing={listing}
      className="dropdown-input"
    >

      { label && <span className="label">{label}</span> }
      <button className="box" onClick={() => setListing(!listing)}>
        { (Icons[selected.icon] && Icons[selected.icon]()) || (icon && Icons[icon]()) }
        { selected.title || placeholder }
        <Icons.Selector className="selector-icon" />
      </button>
      {
        !disabled && (
          <div className={`list${!listing ? ' hidden' : ''}`}>

            {/*If options is searchable */}
            {
              searchable && (
                <div className="item search">
                  <Icons.Search />
                  <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              )
            }

            {/* Input options rendering */}
            {
              options
                .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
                .map((item) => (
                  <div key={item.title} className="item" onClick={() => handleSelect(item)}>
                    {Icons[item.icon] && Icons[item.icon]()}
                    {item.title}
                  </div>
                ))
            }

          </div>
        )
      }
      <div className="error-message">
        { error[name] && error[name].message}
      </div>
    </DropDown>
  );
};

DropdownInput.propTypes = {
  placeholder: propTypes.string,
  icon: propTypes.string,
  label: propTypes.string,
  error: propTypes.object,
  disabled: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    icon: propTypes.string,
  })),
  searchable: propTypes.bool,
  field: propTypes.any,
  value: propTypes.string,
  name: propTypes.string.isRequired,
};

DropdownInput.defaultProps = {
  placeholder: '',
  icon: '',
  label: '',
  error: {},
  disabled: false,
  options: ['Ankara', 'İstanbul'],
  searchable: true,
  value: '',
  field: null,
};

export default DropdownInput;
