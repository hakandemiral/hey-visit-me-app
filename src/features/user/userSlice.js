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

      if (res.status === 201) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const setContactInfos = createAsyncThunk(
  'user/SetContatcInfos',
  async (data, thunkAPI) => {
    try {
      const res = await api.post('/user/setContactInfos', data);

      if (res.status === 201) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const newExperience = createAsyncThunk(
  'user/newExperience',
  async (data, thunkAPI) => {
    try {
      const res = await api.post('/user/experiences/new');

      if (res.status === 201) {
        console.log(res);
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteExperience = createAsyncThunk(
  'user/deleteExperience',
  async (data, thunkAPI) => {
    try {
      const res = await api.delete(`/user/experiences/${data}`);

      if (res.status === 200) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateExperience = createAsyncThunk(
  'user/updateExperience',
  async (data, thunkAPI) => {
    try {
      const { id, ...sendData } = data;
      const res = await api.put(`/user/experiences/${id}`, sendData);

      if (res.status === 201) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const newEducation = createAsyncThunk(
  'user/newExperience',
  async (data, thunkAPI) => {
    try {
      const res = await api.post('/user/educations/new');

      if (res.status === 201) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteEducation = createAsyncThunk(
  'user/deleteEducation',
  async (data, thunkAPI) => {
    try {
      const res = await api.delete(`/user/educations/${data}`);

      if (res.status === 200) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateEducation = createAsyncThunk(
  'user/updateExperience',
  async (data, thunkAPI) => {
    try {
      const { id, ...sendData } = data;
      const res = await api.put(`/user/educations/${id}`, sendData);

      if (res.status === 201) {
        return thunkAPI.fulfillWithValue(res.data);
      }
    } catch (error) {
      console.log(error);
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
    contactInfos: {
      phoneKind: '',
      phoneValue: '',
      emailKind: '',
      emailValue: '',
      websiteKind: '',
      websiteValue: '',
      socialAccounts: [],
    },
    experiences: [],
    educations: [],
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
      state.initialLoading = true;
    },
    [getFullProfile.fulfilled]: (state, { payload }) => {
      state.profile = payload.profile;
      state.contactInfos = payload.contactInfos;
      state.experiences = payload.experiences;
      state.educations = payload.educations;
      // state.competencies = payload.competencies;
      state.initialLoading = false;
    },
    [getFullProfile.rejected]: (state, { payload }) => {
      state.initialLoading = false;
    },

    /* Profile settings reducers */
    [setProfile.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [setProfile.fulfilled]: (state, { payload }) => {
      state.profile = payload;
      state.formPending = false;
    },
    [setProfile.rejected]: (state, { payload }) => {
      state.formPending = false;
    },

    /* Contact infos reducers */
    [setContactInfos.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [setContactInfos.fulfilled]: (state, { payload }) => {
      state.contactInfos = payload;
      state.formPending = false;
    },
    [setContactInfos.rejected]: (state, { payload }) => {
      state.formPending = false;
    },

    /* Experiences reducers */
    [newExperience.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [newExperience.fulfilled]: (state, { payload }) => {
      state.experiences.push(payload);
      state.formPending = false;
    },
    [newExperience.rejected]: (state, { payload }) => {
      state.formPending = false;
    },
    [deleteExperience.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [deleteExperience.fulfilled]: (state, { payload }) => {
      state.formPending = false;
      state.experiences = state.experiences.filter((item) => item._id !== payload);
    },
    [deleteExperience.rejected]: (state, { payload }) => {
      state.formPending = false;
    },
    [updateExperience.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [updateExperience.fulfilled]: (state, { payload }) => {
      state.formPending = false;
    },
    [updateExperience.rejected]: (state, { payload }) => {
      state.formPending = false;
    },

    /*Educations Reducers */
    [newEducation.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [newEducation.fulfilled]: (state, { payload }) => {
      state.educations.push(payload);
      state.formPending = false;
    },
    [newEducation.rejected]: (state, { payload }) => {
      state.formPending = false;
    },
    [deleteEducation.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [deleteEducation.fulfilled]: (state, { payload }) => {
      state.formPending = false;
      state.educations = state.educations.filter((item) => item._id !== payload);
    },
    [deleteEducation.rejected]: (state, { payload }) => {
      state.formPending = false;
    },
    [updateEducation.pending]: (state, { payload }) => {
      state.formPending = true;
    },
    [updateEducation.fulfilled]: (state, { payload }) => {
      state.formPending = false;
    },
    [updateEducation.rejected]: (state, { payload }) => {
      state.formPending = false;
    },
  },
});

export default userSlice.reducer;
