import React from 'react';
import Statistics from './Statistics';
import ShowCase from '../../../Sections/ShowCase';
import FullBand from '../../../Sections/FullBand';

const Overview = () => (
  <>
    <Statistics />
    <ShowCase showCaseId={1} />
    <ShowCase showCaseId={2} />
    <ShowCase showCaseId={3} />
    <FullBand />
  </>
);

export default Overview;
