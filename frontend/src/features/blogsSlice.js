import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateValue = {
    blogs: [],
    loading: 'idle',
    error: null,
};

const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/blogs`);
        return response.data.data;
        // console.log(response.data);
    } catch (error) {
        throw error;
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
