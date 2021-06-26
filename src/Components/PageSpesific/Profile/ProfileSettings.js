import React from 'react';
import styled, { css } from 'styled-components';
import FormBase from '../../Generic/Forms/FormBase';
import profilePhoto from '../../../Images/Photos/profile-picture.png';
import Button from '../../Generic/Inputs/Button';
import TextInput from '../../Generic/Inputs/TextInput';
import DropdownInput from '../../Generic/Inputs/DropdownInput';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .profile-photo {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 4rem;
    
    img {
      width: 6rem;
      height: 6rem;
      margin-right: 2rem;
    }
    
    button {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  
  #text-input {
    margin-bottom: 4rem;
  }
`);

const ProfileSettings = () => (
  <FormBase onSubmit={(e) => { e.preventDefault(); }}>
    <Wrapper>
      <div className="profile-photo">
        <img src={profilePhoto} alt="profile" />
        <Button text="Upload new photo" size="little" variant="primary" />
        <Button text="Edit" size="little" />
        <Button text="Delete" size="little" />
      </div>
      <TextInput placeholder="Gülsüm Yaşar" label="Full Name" icon="User" />
      <TextInput placeholder="johndoe" label="Username" prefix="heyvisit.me/" />
      <TextInput placeholder="example UI designer" label="Job Title" />
      <TextInput placeholder="example Stripe" label="Company" />
      <DropdownInput
        placeholder="Country"
        label="Country"
        options={[
          { title: 'Norway' },
          { title: 'Holland' },
        ]}
      />
      <TextInput placeholder="City" label="City" />
      <TextInput placeholder="DD/MM/YYYY" label="Birth Date" />
      <DropdownInput
        placeholder="Account Status"
        label="Account Status"
        options={[
          { title: 'Active', icon: 'Eye' },
          { title: 'Passive', icon: 'EyeOff' },
        ]}
        searchable={false}
        icon="Eye"
      />
    </Wrapper>
  </FormBase>
);

export default ProfileSettings;
