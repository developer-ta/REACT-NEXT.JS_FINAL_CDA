import { createSlice } from '@reduxjs/toolkit';
//useSelector==>state
const initialState = {
  event: { menu: [] },
};
export const re = createSlice({
  name: 'data',
  initialState,
  reducers: {
    set: (state, action) => {
      state.event.menu = action.payload.split(' ');
    },
  },
});
// action use by useDispatch==>
export const { set } = re.actions;
export default re.reducer;
