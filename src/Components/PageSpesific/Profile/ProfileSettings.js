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
  birthDate: yup.string().matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, 'Enter a valid date. dd.mm.yyyy'),
});

const ProfileSettings = () => {
  const defaultValues = {
    fullName: 'Hakan Demiral',
    userName: 'hakan',
    job: 'Javascript Developer',
    company: 'Nothing',
    country: 'Turkey',
    city: 'Ankara',
    birthDate: '25.03.1998',
    accountStatus: 'Active',
    bio: 'I\'m Hakan, since the day I was born, I have created myself by producing something. I have not been educated in any formal education institution, I believe that I can educate myself more effectively. I\'m actively working on front-end technologies, the incredible rise of javascript in the last period and the fact that it can work wonders without realizing the platform is the main reason I work with javascript. I am excited to produce a new generation of solutions without the cumbersome traditional technologies.',
  };

  const {
    register, watch, handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
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
          name="country"
          render={({ field }) => (
            <DropdownInput
              field={field}
              name="country-select-box"
              placeholder="Country"
              label="Country"
              options={[
                { title: 'Norway' },
                { title: 'Holland' },
                { title: 'Turkey' },
              ]}
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
                { title: 'Active', icon: 'Eye' },
                { title: 'Passive', icon: 'EyeOff' },
              ]}
            />
          )}
        />
        <TextArea
          label="Bio"
          placeholder="Brief description about yourself. Personal information and details..."
          hookForm={{ ...register('bio') }}
        />
      </Wrapper>
    </FormBase>
  );
};

export default ProfileSettings;
