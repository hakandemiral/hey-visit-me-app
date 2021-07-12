import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import moment from 'moment';
import 'moment-precise-range-plugin';
import * as Icons from '../../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  .title {
    font: ${theme.typography.body.regular20};
    color: ${theme.colors.heading};
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    
    .time {
      font: ${theme.typography.body.medium16};
      color: ${theme.colors.brand};
      margin-left: 1rem;
    }
  }
  
  .item {
    margin-bottom: 1rem;
    .top {
      display: flex;
      align-items: center;

      .dot {
        min-width: 3.5rem;
        min-height: 3.5rem;
        background-color: ${theme.colors.brandMoreLight};
        border-radius: 50%;
        margin-right: 2rem;
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        color: ${theme.colors.brand};
      }
      
      .position {
        display: flex;
        align-items: center;
        font: ${theme.typography.body.medium16};
        color: ${theme.colors.heading};
        
        .time {
          font: ${theme.typography.body.medium16};
          color: ${theme.colors.brand};
          margin-left: 1rem;
        }
      }
    }
    
    .bottom {
      margin-top: 1rem;
      margin-left: 1.5rem;
      padding-left: 3.8rem;
      border-left: 2px solid ${theme.colors.borderDivider};
      
      .bottom-item {
        display: flex;
        align-items: center;
        color: ${theme.colors.bodyText};
        font: ${theme.typography.body.regular16};
        
        svg {
          color: ${theme.colors.borderDivider};
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
      
      .description {
        font: ${theme.typography.body.regular16};
        max-width: 80%;
        color: ${theme.colors.bodyText};
      }
    }
    
    .mini-dot {
      margin: 0 0.5rem;
    }
  }
`);

const Experiences = ({ data }) => {
  return (
    <Wrapper className="time-line">
      <div className="title">
        Educations
      </div>
      {data.map((item) => {
        const startDate = new Date(`01 ${item.startMonth} ${item.startYear}`);
        const endDate = new Date(`01 ${item.endMonth} ${item.endYear}`);
        const dateRange = moment.preciseDiff(startDate, endDate);

        return (
          <div key={item._id} className="item">
            <div className="top">
              <div className="dot"><Icons.PaperClip /></div>
              <div className="position">
                {item.school}
                <span className="mini-dot">·</span>
                {item.department}
                <div className="time">{dateRange}</div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-item">
                <Icons.BadgeCheck />
                {item.degree}
              </div>
              <div className="bottom-item">
                <Icons.Calendar />
                {`${item.startMonth} ${item.startYear}`}
                <span className="mini-dot">·</span>
                {`${item.endMonth} ${item.endYear}`}
              </div>
              <div className="description">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

Experiences.propTypes = {
  data: propTypes.array.isRequired,
};

export default Experiences;
