import React, { useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import FormBase from '../../../Generic/Forms/FormBase';
import Button from '../../../Generic/Inputs/Button';
import TextInput from '../../../Generic/Inputs/TextInput';
import DropdownInput from '../../../Generic/Inputs/DropdownInput';
import TextArea from '../../../Generic/Inputs/TextArea';
import { setProfile } from '../../../../features/user/userSlice';
import getAllCountries from '../../../../Helpers/getAllCountries';
import placeholdePhoto from '../../../../Images/Photos/profilePlaceholder.svg';

const Wrapper = styled.div(({
  theme, profilePhoto,
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
      
      label {
        position: relative;
        margin-right: 2rem;
        width: 172px;
        height: auto;
        
        input[type="file"] {
          display: block;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0;
          cursor: pointer;
          position: absolute;
          z-index: 9;
        }
      }
    }
    
    .photo {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      margin-right: 2rem;
      background-image: url(${profilePhoto});
      background-size: cover;
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
  birthDate: yup.string(),
  photo: yup.string(),
  accountStatus: yup.bool().isRequired,
});

const ProfileSettings = () => {
  const { profile: profileData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register, watch, handleSubmit, control, formState: { errors }, reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: profileData,
  });

  const onSubmit = (data) => {
    dispatch(setProfile(data));
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <Wrapper profilePhoto={watch('photo')}>
        <div className="profile-photo">
          <div className="photo" />
          <div className="actions">
            <Controller
              name="photo"
              control={control}
              render={({ field }) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label>
                  <FileBase64 onDone={(file) => field.onChange(file.base64)} id="filephoto" />
                  <Button type="button" text="Upload new photo" size="little" variant="primary" />
                </label>
              )}
            />
          </div>
        </div>

        <TextInput
          autoComplate="name"
          hookForm={{ ...register('fullName') }}
          name="fullName"
          placeholder="John Doe"
          label="Full Name"
          icon="User"
          error={errors}
        />

        <TextInput
          autoComplate="nickname"
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
          autoComplate="organization"
          name="company"
          hookForm={{ ...register('company') }}
          placeholder="example Stripe"
          label="Company"
          error={errors}
        />

        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <DropdownInput
              field={field}
              name="country-select-box"
              placeholder="Country"
              label="Country"
              options={getAllCountries()}
              error={errors}
            />
          )}
        />

        <TextInput
          hookForm={{ ...register('city') }}
          name="city"
          placeholder="City"
          label="City"
          error={errors}
        />

        <TextInput
          hookForm={{ ...register('birthDate') }}
          name="birthDate"
          placeholder="DD.MM.YYYY"
          label="Birth Date"
          error={errors}
        />

        <Controller
          control={control}
          name="accountStatus"
          render={({ field }) => (
            <DropdownInput
              name="accountStatus"
              field={field}
              placeholder="Account Status"
              label="Account Status"
              options={[
                { title: 'Active', value: true, icon: 'Eye' },
                { title: 'Passive', value: false, icon: 'EyeOff' },
              ]}
            />
          )}
        />

        <TextArea
          label="Bio"
          placeholder="Brief description about yourself. Personal information and details..."
          hookForm={{ ...register('bio') }}
          error={errors}
        />
      </Wrapper>
    </FormBase>
  );
};

export default ProfileSettings;
