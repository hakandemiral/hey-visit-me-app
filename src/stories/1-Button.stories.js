import React from 'react';
import Button from '../Components/Generic/Button';

export default {
  title: 'Buttons',
  component: Button,
};

export const Secondary = () => (
  <>
    <Button text="Normal Button" />
    <br />
    <Button text="Small Button" size="small" />
    <br />
    <Button text="Disabled Button" disabled />
    <br />
    <Button text="Disabled Small Button" size="small" disabled />
  </>
);

export const Primary = () => (
  <>
    <Button type="primary" text="Normal Button" />
    <br />
    <Button type="primary" text="Small Button" size="small" />
    <br />
    <Button type="primary" text="Disabled Button" disabled />
    <br />
    <Button type="primary" text="Disabled Small Button" size="small" disabled />
  </>
);
