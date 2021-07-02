import React from 'react';
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
  }
  
  @media screen and (max-width: 578px) {
    justify-content: center;
  }
`);

const Contact = () => {
  return (
    <Wrapper>
      <div className="item">
        <Icons.Birthday />
        July 25, 1998
      </div>
      <div className="item">
        <Icons.Mail />
        wcnxxx@gmail.com
      </div>
      <div className="item">
        <Icons.Phone />
        +55 555 555 55 55
      </div>
      <div className="item">
        <Icons.ExternalLink />
        https:/asdsadasd.com.be
      </div>
    </Wrapper>
  );
};

export default Contact;
