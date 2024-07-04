// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './action/formAction';
import formReducer1 from './action/stepperAction';

const store = configureStore({
  reducer: {
    form: formReducer,
    form1: formReducer1
  },
});

export default store;
