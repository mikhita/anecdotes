import { createSlice } from '@reduxjs/toolkit';
import { clearTime, setTime } from './timeOutReducer';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    set: (state, action) => {
      return action.payload;
    },
  }
});

export const setNotification = (message, time) => {
  return async dispatch => {
      dispatch(set(message))
      dispatch(clearTime())
      dispatch(setTime(setTimeout(() => dispatch(set(null)), time * 1000)))
  }
}

export const { set } = notificationSlice.actions;
export default notificationSlice.reducer;
