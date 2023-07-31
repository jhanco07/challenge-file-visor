// store.js
import { configureStore } from '@reduxjs/toolkit'

import filesReducer from '../reducers/files-reducer'; 

const store = configureStore({
  reducer: {
    filesReducer
  }
});

export default store;