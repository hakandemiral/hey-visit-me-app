import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as Icons from '../../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${theme.colors.paper};
  filter: ${theme.filters.softShadow};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  .item {
    display: flex;
    align-items: center;
    color: ${theme.colors.bodyText};
    margin: 1rem;
    
    svg {
      color: ${theme.colors.borderDivider};
      margin-right: 0.5rem;
      font-size: 1.5rem;
    }
    
    a {
      color: inherit;
    }
  }
  
  @media screen and (max-width: 578px) {
    justify-content: center;
  }
`);

const Contact = ({
  birthday, mail, phone, website,
}) => {
  return (
    <Wrapper>
      {birthday && (
        <div className="item">
          <Icons.Birthday />
          {birthday}
        </div>
      )}
      {mail && (
        <div className="item">
          <Icons.Mail />
          {mail}
        </div>
      )}
      {phone && (
        <div className="item">
          <Icons.Phone />
          {phone}
        </div>
      )}
      {website && (
        <div className="item">
          <Icons.ExternalLink />
          <a target="_blank" rel="noreferrer" href={website}>{website}</a>
        </div>
      )}
    </Wrapper>
  );
};

Contact.propTypes = {
  birthday: propTypes.string,
  mail: propTypes.string,
  phone: propTypes.string,
  website: propTypes.string,
};

Contact.defaultProps = {
  birthday: '',
  mail: '',
  phone: '',
  website: '',
};

export default Contact;
