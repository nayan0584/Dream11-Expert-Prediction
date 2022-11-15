import {createSlice} from '@reduxjs/toolkit';

const detailslice = createSlice({
  name: 'detail',
  initialState: {
    AppDetail: [],
  },
  reducers: {
    setAppInfo(state = initialState, action) {
      state.AppDetail = action?.payload;
    },
  },
});

export const {setAppInfo} = detailslice.actions;
export default detailslice.reducer;
