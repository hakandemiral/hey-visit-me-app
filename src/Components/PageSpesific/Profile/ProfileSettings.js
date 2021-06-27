import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormBase from '../../Generic/Forms/FormBase';
import profilePhoto from '../../../Images/Photos/profile-picture.png';
import Button from '../../Generic/Inputs/Button';
import TextInput from '../../Generic/Inputs/TextInput';
import DropdownInput from '../../Generic/Inputs/DropdownInput';
import TextArea from '../../Generic/Inputs/TextArea';

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
    
    .actions {
      display: flex;
    }
    
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

  .text-area {
    width: 100%;
    margin: 1rem;
  }

  .text-input, .dropdown-input {
    width: 45%;
    margin: 1rem;
  }

  @media screen and (max-width: 960px) {
    .text-input, .dropdown-input {
      width: 100%;
    }
  }

  @media screen and (max-width: 720px) {
    .profile-photo {
      flex-direction: column;
      
      img {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 540px) {
    .hey-button {
      padding: 0.5rem;
    }
    
    .profile-photo {
      margin-bottom: 0;
    }
    
    .actions {
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      
      .hey-button {
        margin-bottom: 0.5rem;
      }
    }
    
    .profile-photo {
      flex-direction: column;

      img {
        margin-bottom: 2rem;
      }
    }
  }

`);

const validationSchema = yup.object({
  fullName: yup.string().min(3).max(55).required('Required'),
  userName: yup.string().min(3).max(22).required('Required'),
  job: yup.string(),
  company: yup.string(),
  country: yup.string(),
  city: yup.string(),
  // birthDate: yup.date().format('DD-MM-YYYY', true),
});

const ProfileSettings = () => {
  const {
    register, watch, handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormBase onSubmit={handleSubmit((e) => {})}>
      <Wrapper>

        <div className="profile-photo">
          <img src={profilePhoto} alt="profile" />
          <div className="actions">
            <Button text="Upload new photo" size="little" variant="primary" />
            <Button text="Edit" size="little" />
            <Button text="Delete" size="little" />
          </div>
        </div>

        <TextInput
          hookForm={{ ...register('fullName') }}
          name="fullName"
          placeholder="John Doe"
          label="Full Name"
          icon="User"
          error={errors}
        />

        <TextInput
          name="userName"
          hookForm={{ ...register('userName') }}
          placeholder="johndoe"
          label="Username"
          prefix="heyvisit.me/"
          error={errors}
        />

        <TextInput
          name="job"
          hookForm={{ ...register('job') }}
          placeholder="example UI designer"
          label="Job Title"
          error={errors}
        />

        <TextInput
          name="company"
          hookForm={{ ...register('company') }}
          placeholder="example Stripe"
          label="Company"
          error={errors}
        />

        <Controller
          control={control}
          name="country-select"
          render={({ field }) => (
            <DropdownInput
              field={field}
              name="country-select-box"
              placeholder="Country"
              label="Country"
              options={[
                { title: 'Norway' },
                { title: 'Holland' },
              ]}
              value="Holland"
              error={errors}
            />
          )}
        />

        <TextInput
          hookForm={{ ...register('city') }}
          name="city"
          placeholder="City"
          label="City"
        />

        <TextInput
          hookForm={{ ...register('birthDate') }}
          name="birthDate"
          placeholder="DD.MM.YYYY"
          label="Birth Date"
        />

        <Controller
          control={control}
          name="account-status-select"
          render={({ field }) => (
            <DropdownInput
              field={field}
              placeholder="Account Status"
              label="Account Status"
              options={[
                { title: 'Active', icon: 'Eye' },
                { title: 'Passive', icon: 'EyeOff' },
              ]}
              value="Active"
            />
          )}
        />
        <TextArea label="Bio" size={0} />
      </Wrapper>
    </FormBase>
  );
};

export default ProfileSettings;
