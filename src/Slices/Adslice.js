import {createSlice} from '@reduxjs/toolkit';

const Adslice = createSlice({
  name: 'ads',
  initialState: {
    subscription: false,
  },
  reducers: {
    setSubscription(state = initialState, action) {
      state.subscription = !state.subscription;
    },
  },
});

export const {setSubscription} = Adslice.actions;
export default Adslice.reducer;
