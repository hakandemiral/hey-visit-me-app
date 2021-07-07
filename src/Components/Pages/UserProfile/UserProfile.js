import React from 'react';
import styled, { css } from 'styled-components';
import TimeLine from './Components/TimeLine';
import Competence from './Components/Competence';
import FullBand from '../../Sections/FullBand';
import Footer from '../../Sections/Footer';
import Contact from './Components/Contact';
import * as Icons from '../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  .container {
    max-width: 1440px;
    margin: auto;
    padding: 0 2rem;
  }
  
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40rem;
    margin: auto;
    
    img {
      border-radius: 50%;
      margin-top: 8rem;
      margin-bottom: 2rem;
      width: 15rem;
      height: 15rem;
    }
    
    .name {
      font: ${theme.typography.heading.medium32};
      color: ${theme.colors.brand};
    }
    
    .job {
      font: ${theme.typography.heading.regular20};
      color: ${theme.colors.bodyText};
      margin-bottom: 2rem;
    }

    .where {
      width: 60%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem auto;
      
      .item {
        display: flex;
        align-items: center;
        font: ${theme.typography.body.regular16};
        color: ${theme.colors.bodyText};
        
        svg {
          color: ${theme.colors.borderDivider};
          font-size: 1.5rem;
          margin-right: 1rem;
        }
      }
      
    }
    
    .bio {
      margin: 1rem auto 4rem auto;
      color: ${theme.colors.bodyText};
      font: ${theme.typography.body.regular16};
      text-align: justify;
      padding: 0 2rem;
    }
    
    .socials {
      width: 60%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem auto;
      
      a {
        color: ${theme.colors.borderDivider};
        
        svg {
          font-size: 1.5rem;
        }
      }
    }
    

  }
  
  .time-line {
    margin-top: 6rem;
  }
  
  h4 {
    margin-top: 6rem;
    font: ${theme.typography.body.regular20};
    color: ${theme.colors.bodyText};
  }
  
  .competence {
    margin-top: 2rem;
  }
  
  .full-band {
    margin-top: 5rem;
  }

  @media screen and (max-width: 550px) {
    .container {
      padding: 0 0.75rem;
    }
  }
`);

const UserProfile = () => {
  return (
    <Wrapper>
      <div className="head">

        <img src={profilePhoto} alt="Profile" />

        <div className="name">
          Gülsüm Yaşar
        </div>

        <div className="job">
          UI Designer
        </div>

        <div className="where">
          <div className="item">
            <Icons.Location />
            Istanbul, Turkey
          </div>
          <div className="item">
            <Icons.Office />
            Freelance
          </div>
        </div>

        <div className="socials">
          <a href="#">
            <Icons.Figma />
          </a>
          <a href="#">
            <Icons.Twiter />
          </a>
          <a href="#">
            <Icons.Instagram />
          </a>
          <a href="#">
            <Icons.Link />
          </a>
          <a href="#">
            <Icons.AtSymbol />
          </a>
        </div>

        <div className="bio">
          I&apos;m Hakan, since the day I was born, I have created myself by producing something.
          I have not been educated in any formal education institution, I believe that I can
          educate myself more effectively. I&apos;m actively working on front-end technologies,
          the incredible rise of javascript in the last period and the fact that it can work
          wonders without realizing the platform is the main reason I work with javascript.
          I am excited to produce a new generation of solutions without
          the cumbersome traditional technologies.
          It is a great pleasure for me to build reusable and component-based architectures.
          I develop myself to be able to write code that complies with standards and teamwork.
          Nothing is done until I find the best performance path,
          I hate unnecessary use of system resources.
        </div>
      </div>
      <div className="container">
        <Contact />
        <TimeLine />
        <h4>Competencies</h4>
        <Competence />
      </div>

      <FullBand />
      <Footer />
    </Wrapper>
  );
};

export default UserProfile;
