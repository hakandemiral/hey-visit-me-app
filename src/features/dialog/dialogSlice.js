import { createSlice } from '@reduxjs/toolkit';

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    openDialog: '',
  },
  reducers: {
    setOpen: (state, action) => {
      state.openDialog = action.payload;
    },
    setClose: (state) => {
      state.openDialog = '';
    },
  },
});

export const { setOpen, setClose } = dialogSlice.actions;

export default dialogSlice.reducer;
