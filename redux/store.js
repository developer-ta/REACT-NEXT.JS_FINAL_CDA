import { configureStore } from '@reduxjs/toolkit';
import re from './featureData';
//useSelector--> state.DataSliceL.eventSlideL
export const store = configureStore({
  reducer: { data: re },
});
