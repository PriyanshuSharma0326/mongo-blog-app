import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { readAllBlogsHandler } from '../lib/utils/utils';

const initialStateValue = {
    blogs: [],
    loading: 'idle',
    error: null,
};

const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await readAllBlogsHandler();
    
    if(response.success) {
        return response.data;
    }
    else {
        alert(response.message);
        return;
    }
});

const blogSlice = createSlice({
    name: 'blogs',
    initialState: initialStateValue,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogs.pending, (state) => {
            state.loading = 'loading';
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.blogs = action.payload;
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    },
});

export default blogSlice.reducer;

export { fetchBlogs };
