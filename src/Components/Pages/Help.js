import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Container from '../Layout/Container';
import SearchBox from '../PageSpesific/Help/SearchBox';
import Card from '../PageSpesific/Help/Card';

import AccountSvg from '../PageSpesific/Help/assets/images/Account.svg';
import GeneralSvg from '../PageSpesific/Help/assets/images/All.svg';
import AllSvg from '../PageSpesific/Help/assets/images/General.svg';
import PrivacySvg from '../PageSpesific/Help/assets/images/Privacy.svg';

import Accordion from '../PageSpesific/Help/Accordion';
import faqData from '../PageSpesific/Help/assets/datas/faq.json';

const Wrapper = styled.div(({
  theme,
}) => css`
  h2 {
    color: ${theme.colors.heading};
    font: ${theme.typography.body.regular20};
    margin-bottom: 0.5rem;
  }
  
  p {
    font: ${theme.typography.body.regular16};
    color: ${theme.colors.bodyText};
    margin-bottom: 2rem;
  }
  
  .help-search-box {
    width: 80%;
    margin: auto;
  }
  
  .cards {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 8rem;
    justify-content: space-between;
    
    .selectedCategory {
      border: 5px solid ${theme.colors.brand};
    }
  }
`);

const Help = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    if (categoryFilter) setCategoryFilter('');
    setSearch(value);
  };

  return (
    <Container>
      <Wrapper>
        <h2>Help</h2>
        <p>
          You can find answers to basic questions about Heyvisit.me. Choose one of these popular
          categories to continue or search anything. Can’t find the answers you’re looking for?
          Contact us and ask us anything.
        </p>
        <SearchBox onChange={(e) => handleSearch(e.target.value)} />

        <div className="cards">
          <Card className={categoryFilter === '' && 'selectedCategory'} type="All" icon={AllSvg} onClick={() => setCategoryFilter('')} />
          <Card className={categoryFilter === 'General' && 'selectedCategory'} type="General" icon={GeneralSvg} onClick={() => setCategoryFilter('General')} />
          <Card className={categoryFilter === 'Account' && 'selectedCategory'} type="Account" icon={AccountSvg} onClick={() => setCategoryFilter('Account')} />
          <Card className={categoryFilter === 'Privacy' && 'selectedCategory'} type="Privacy" icon={PrivacySvg} onClick={() => setCategoryFilter('Privacy')} />
        </div>

        <h2>Frequently Asked Questions</h2>

        {faqData
          .filter((item) => item.category.includes(categoryFilter.toLowerCase()))
          .filter((item) => (
            (item.body.toLowerCase().includes(search.toLowerCase()))
            || (item.title.toLowerCase().includes(search.toLowerCase()))
          ))
          .map((item) => (
            <Accordion key={item.id} body={item.body} title={item.title} />
          ))}

      </Wrapper>
    </Container>
  );
};

export default Help;
