import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogsSlice';
// import cateredNewsReducer from '../features/cateredNewsSlice';

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        // cateredNews: cateredNewsReducer,
    },
});
