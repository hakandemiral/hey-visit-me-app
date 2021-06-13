import React from 'react';
import Button from '../Components/Generic/Button';

export default {
  title: 'Buttons',
  component: Button,
};

export const Secondary = () => (
  <>
    <Button text="Little Button" size="little" />
    <br />
    <Button text="Little Button" size="little" icon="ExternalLink" disabled />
    <br />
    <Button text="Normal Button" />
    <br />
    <Button text="Small Button" size="short" icon="Bell" />
    <br />
    <Button text="Disabled Button" disabled />
    <br />
    <Button text="Disabled short Button" size="short" disabled />
  </>
);

export const Primary = () => (
  <>
    <Button type="primary" text="Little Button" size="little" />
    <br />
    <Button type="primary" text="Little Button" size="little" icon="ExternalLink" disabled />
    <br />
    <Button type="primary" text="Normal Button" />
    <br />
    <Button type="primary" text="Small Button" size="short" />
    <br />
    <Button type="primary" text="Disabled Button" disabled />
    <br />
    <Button type="primary" text="Disabled Small Button" size="short" disabled />
    <br />
    <Button type="primary" text="Button with icon" icon="Eye" />
  </>
);
