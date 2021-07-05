import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const getFullProfile = createAsyncThunk(
  'user/getFullProfile',
  async (data, thunkAPI) => {
    try {
      const res = await api.get('/user/getFullProfile');

      if (res.status === 200) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(...err);
    }
  },
);

export const setProfile = createAsyncThunk(
  'user/setProfile',
  async (data, thunkAPI) => {
    try {
      const res = await api.post('/user/setProfile', data);

      if (res.status === 200) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    initialLoading: false,
    formPending: false,
    profile: {
      fullName: '',
      userName: '',
      job: '',
      company: '',
      country: '',
      city: '',
      birthDate: '',
      accountStatus: false,
      bio: '',
      photo: '',
    },
    contact: {
      phone: {
        kind: 'Work',
        number: '555 555 55 55',
      },
      email: {
        kind: 'Work',
        address: 'asd@asd.com',
      },
      webSite: {
        kind: 'Work',
        address: 'google.com',
      },
      socialAccounts: [
        { id: 0, network: 'Instagram', userName: '@johndoe' },
        { id: 1, network: 'Facebook', userName: '@johndoe' },
        { id: 2, network: 'Figma', userName: '@johndoe' },
      ],
    },
    experiences: [
      {
        job: 'Worker',
        company: 'Google',
        type: 'Remote',
        location: 'Ireland',
        start: {
          month: 'May',
          year: '2002',
        },
        end: {
          month: 'July',
          year: '2021',
        },
        isCurrently: false,
        decription: '',
      },
    ],
    educations: [
      {
        school: 'Worker',
        study: 'Google',
        degree: 'Remote',
        start: {
          month: 'May',
          year: '2002',
        },
        end: {
          month: 'July',
          year: '2021',
        },
        isCurrently: false,
        decription: '',
      },
    ],
    competencies: {
      skills: ['Javascript', 'React', 'Node'],
      tools: ['Webstorm', 'Mongoose'],
      languages: [
        { id: 0, language: 'Turkish', level: 'Native' },
        { id: 1, language: 'English', level: 'B1' },
      ],
    },
  },
  reducers: {

  },
  extraReducers: {
    [getFullProfile.pending]: (state, { payload }) => {

    },
    [getFullProfile.fulfilled]: (state, { payload }) => {
      state.profile = payload.profile;
      state.contact = payload.contact;
      state.experiences = payload.experiences;
      state.educations = payload.educations;
      state.competencies = payload.competencies;
    },
    [getFullProfile.rejected]: (state, { payload }) => {
      console.log(payload);
    },
    [setProfile.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [setProfile.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.formPending = false;
    },
    [setProfile.rejected]: (state, { payload }) => {
      console.log(payload);
      state.formPending = false;
    },
  },
});

export default userSlice.reducer;
