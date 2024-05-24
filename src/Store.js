// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './action/stepperAction';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
