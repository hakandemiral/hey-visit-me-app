// Core
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

// Components
import Button from '../../Generic/Inputs/Button';
import ThemeSwitch from '../../Generic/ThemeSwitch';
import FullBand from '../../Sections/FullBand';
import Footer from '../../Sections/Footer';
import Accordion from '../Dashboard/Help/Accordion';

// Assets
import CircleSvg from './assets/CircleWave.svg';
import hero from './assets/hero.svg';
import cardTemplateIcon from './assets/card-template-icon.svg';
import darkModeIcon from './assets/darkMode.svg';
import wrapProfile from './assets/wrapProfile.svg';
import EcoFriendly from './assets/EcoFriendly.svg';
import Check from './assets/Check.svg';
import Contact from './assets/Contact.svg';
import faqData from '../Dashboard/Help/assets/datas/faq.json';

import profileDark from './assets/profileDark.png';
import profileLight from './assets/profileLight.png';
import customizeDark from './assets/customizeDark.png';
import customizeLight from './assets/customizeLight.png';
import templatesDark from './assets/templatesDark.png';
import templatesLight from './assets/templatesLight.png';
import themingDark from './assets/themingDark.png';
import themingLight from './assets/themingLight.png';

const Wrapper = styled.div(({
  theme, isDark,
}) => css`
  .head {
    height: 80%;
    background-color: #fff;
    ${theme.colors.authPageGraient};
    
    .actions {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding: 2rem 4rem 0 0;
      
      a {
        z-index: 2;
        &:not(:last-child) {
          margin-right: 2rem;
        }
      }
    }
    
    .circle {
      position: absolute;
      right: 33.5%;
      top: -3%;
      -webkit-user-drag: none;
      z-index: 1;
    }
    
    .container {
      max-width: 1200px;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      margin: 4.5rem auto 0 auto;
      
      .texts {
        z-index: 2;
        margin-top: 6rem;
        max-width: 40rem;
        height: auto;
        margin-right: 2rem;
        
        h2 {
          color: ${theme.colors.brand};
          font: ${theme.typography.heading.medium32};
          margin-bottom: 0.5rem;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
          padding: 1rem;
        }
        
        p {
          color: ${theme.colors.bodyText};
          font: ${theme.typography.body.regular16};
          margin-bottom: 4rem;
          border-radius: 1rem;
          padding: 1rem;
        }
      }
      
      img {
        z-index: 2;
      }
    }
    
    @media screen and (max-width: 820px) {
      height: auto;
      padding-bottom: 5rem;
      .container {
        flex-direction: column;
        
        img {
          display: block;
          width: 80%;
          margin: 8rem auto 0 auto;
        }
      }

      .circle {
        left: -30%;
        top: 43%;
      }
    }
  }
  
  .customization {
    max-width: 1440px;
    margin: 10rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h4 {
      text-align: center;
      color: ${theme.colors.pink2};
      font: ${theme.typography.heading.regular20};
      margin-bottom: 0.25rem;
    }
    
    h5 {
      display: flex;
      align-items: center;
      text-align: center;
      font: ${theme.typography.heading.medium32};
      color: ${theme.colors.brand};
      margin-bottom: 0.5rem;
    }
    
    p {
      text-align: center;
      font: ${theme.typography.body.regular16};
      color: ${theme.colors.bodyText};
      max-width: 40rem;
      margin-bottom: 2rem;
    }
    
    img {
      width: 85%;
    }
    
    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }
  }
  
  .section {
    max-width: 1090px;
    margin: 12rem auto 0 auto;
    padding: 0 2rem;
    
    .section-header {
    .icon {
      width: 3.5rem;
      height: 3.5rem;
      margin-bottom: 1rem;
    }
    
    h6 {
      color: ${theme.colors.purple2};
      font: ${theme.typography.heading.regular20};
      margin-bottom: 0.25rem;
    }
    
    h5 {
      display: flex;
      align-items: center;
      color: ${theme.colors.brand};
      font: ${theme.typography.heading.medium32};
      margin-bottom: 0.5rem;
    }
    
    p {
      max-width: 40rem;
      color: ${theme.colors.bodyText};
      font: ${theme.typography.body.regular16};
      margin-bottom: 4rem;
    }
  }
  }
  
  .card-templates {
    background: url(${isDark ? templatesDark : templatesLight}) no-repeat 500px 230px;
    
    .feature {
      border-left: 0.5rem solid ${theme.colors.brandMoreLight};
      max-width: 24.5rem;
      padding-left: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 7rem;
      
      &.highlighted {
        border-color: ${theme.colors.purple2};
      }
      
      h4 {
        display: flex;
        align-items: center;
        color: ${theme.colors.pink2};
        font: ${theme.typography.heading.regular24};
        margin-bottom: 0.5rem;
      }
      
      p {
        color: ${theme.colors.bodyText};
        font: ${theme.typography.body.regular16};
      }
    }
  }
  
  .theming {
    img.darkmodeimg {
      display: block;
      width: 85%;
      margin: 2rem auto 0 auto;
    }
  }
  
  .wrap-profiles {
    .section-header {
      p {
        margin-bottom: 1.5rem;
      }
      
      a {
        color: ${theme.colors.purple};
      }
    }
    
    img.wrap-profiles-img {
      display: block;
      margin: 2rem auto 0 auto;
      width: 85%;
    }
  }
  
  .why-use {
    max-width: 1080px;
    margin: 5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    .item {
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      width: 30%;
      
      h6 {
        margin-top: 1rem;
        margin-bottom: 0.25rem;
        color: ${theme.colors.brand};
        font: ${theme.typography.body.medium16};
      }
      
      p {
        color: ${theme.colors.bodyText};
        font: ${theme.typography.body.regular16};
      }
    }
    
    @media screen and (max-width: 850px) {
      flex-direction: column;
      
      .item {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }
  
  .faq {
    max-width: 1080px;
    padding: 0 1rem;
    margin: 6rem auto 4rem auto;
    text-align: center;
    
    h3 {
      color: ${theme.colors.brand};
      font: ${theme.typography.heading.medium32};
      margin-bottom: 0.5rem;
    }
    
    p {
      margin-bottom: 4rem;
      font: ${theme.typography.body.regular16};
      color: ${theme.colors.bodyText};
    }
  }
  
  .coming-soon {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: ${theme.colors.brandMoreLight};
    font: ${theme.typography.body.medium16};
    color: ${theme.colors.brand};
    margin-left: 1rem;
  }
  
`);

const Landing = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <Wrapper isDark={isDark}>
      <div className="head">

        <div className="actions">
          {isLogin
            ? (
              <>
                <Link to="/dashboard">
                  <Button text="Go to Dashboard" />
                </Link>
              </>
            ) : (
              <Link to="sign-in">
                <Button text="Sign in" />
              </Link>
            )}
        </div>

        <img className="circle" src={CircleSvg} alt="Vector" />

        <div className="container">
          <div className="texts">
            <h2>Create business card and share with people to grow your network </h2>
            <p>
              Business card creation and sharing platform where individuals
              and companies can safely present their contact information, portfolio,
              flows in social networks, visions and much more. Also it is free !
            </p>
            <Button text="Create Free Profile" variant="primary" />
          </div>
          <img src={hero} alt="Hero" />
        </div>
      </div>

      <div className="wrap-profiles section">
        <div className="section-header">
          <img src={wrapProfile} alt="Card Template" className="icon" />
          <h6>Dozens of links, in one click</h6>
          <h5>Secure, free, modern.</h5>
          <p>
            You don’t need to reserve a place for more than one social network logo,
            phone, mail, url in your business card, poster, contact card, video card,
            banner, advertisement designs, they can call you with one click from your
            heyvisit.me profile and access your social networks.
          </p>
          <p>
            All your contact information that you share publicly on your personal blog,
            social media biography, or on your website, is the target of bots that
            continuously scan the internet and collect data, heyvisit.me
            has taken security measures for bot scans.
          </p>

          <a href="#">Learn more about how we’re protecting your datas highly.</a>
        </div>

        <img src={isDark ? profileDark : profileLight} alt="wrap profiles" className="wrap-profiles-img" />
      </div>

      <div className="why-use">

        <div className="item">
          <img src={Contact} alt="icon" />
          <h6>Never Be Lost</h6>
          <p>
            Your contacts won’t lose you when you
            change your username, e-mail address or phone number.
          </p>
        </div>

        <div className="item">
          <img src={Check} alt="icon" />
          <h6>Prevents Profile Spoofing</h6>
          <p>
            It blocks fake accounts that can be opened on your
            behalf on social networks, people can verify whether
            an account belongs to you by looking at your heyvisit.me profile.
          </p>
        </div>

        <div className="item">
          <img src={EcoFriendly} alt="icon" />
          <h6>Nature Friendly</h6>
          <p>
            Online business card reduces paper consumption.
          </p>
        </div>
      </div>

      <div className="customization">
        <h4>Customization</h4>
        <h5>
          Customize your business card
          <span className="coming-soon">&bull; Coming soon</span>
        </h5>
        <p>
          Create beautiful and personalized business card without the designer and design tools.
          No need design knowledge. Don’t pay for expensive design tools.
          Choose color, add personal details and share with people.
        </p>
        <img src={isDark ? customizeDark : customizeLight} alt="customization preview" />
      </div>

      <div className="card-templates section">
        <div className="section-header">
          <img src={cardTemplateIcon} alt="Card Template" className="icon" />
          <h6>Different Look</h6>
          <h5>
            Various styles business cards
            <span className="coming-soon">&bull; Coming soon</span>
          </h5>
          <p>
            First, choose template and then costumize various styles business cards.
            You can find business card that suits your style from different
            templates. Each business card includes unique color schemes and font styles.
          </p>
        </div>

        <div className="feature">
          <h4>Plain Card Templates</h4>
          <p>
            If you want simple and neutral view, you can
            choice plain style card. It includes simple color palettes and font styles.
          </p>
        </div>

        <div className="feature highlighted">
          <h4>Playful Card Templates</h4>
          <p>
            If you want to reflect yourself in a enthusiastic way,
            you can choice playfull style card. It includes colorful and gradient backgrounds.
          </p>
        </div>

        <div className="feature">
          <h4>Elegant Card Templates</h4>
          <p>
            If you want modern and gracious view, you can choice elegant
            style card. It includes pastel and sophisticated color palettes and font styles.
          </p>
        </div>

        <Link to="/sign-up">
          <Button text="Create Free Profile" variant="primary" />
        </Link>

      </div>

      <div className="theming section">

        <div className="section-header">
          <img src={darkModeIcon} alt="Card Template" className="icon" />
          <h6>Dark Mode</h6>
          <h5>User-Friendly Interfaces</h5>
          <p>
            Interfaces don’t disturb your eyes by adjustable mode.
            With dark mode even usable at night.
          </p>
        </div>

        <ThemeSwitch />

        <img src={isDark ? themingDark : themingLight} alt="Dark mode" className="darkmodeimg" />

      </div>

      <div className="faq">
        <h3>Frequently Asked Questions</h3>
        <p>
          You can find answers to basic questions about Heyvisit.me.
          Can’t find the answers you’re looking for? Contact us and ask us anything.
        </p>

        {faqData.map((item) => (
          <Accordion
            key={item.id}
            body={item.body}
            title={item.title}
          />
        ))}

      </div>

      <FullBand />

      <Footer />

    </Wrapper>
  );
};

export default Landing;
