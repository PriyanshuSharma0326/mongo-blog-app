import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SharedLayout from './routes/shared-layout/shared-layout';
import Root from './routes/root/root.route';
import Error from './routes/error/error.route';
import BlogRoute from './routes/blog/blog.route';
import BlogsHome from './pages/blogs-home/blogs-home';
import WriteBlogPage from './pages/write-blog-page/write-blog-page';
import { fetchBlogs } from './features/blogsSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />
                
                {/* <Route path='blogs' element={<Error />} /> */}

                <Route path='blogs' element={<BlogRoute />}>
                    <Route index element={<BlogsHome />} />

                    <Route path='create' element={<WriteBlogPage />} />

                    {/* <Route path='register' element={<SignUp />} /> */}
                </Route>

                {/* <Route path='accounts' element={<Error />} /> */}

                {/* <Route path='account/*' element={<Error />} /> */}

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    )
}

export default App;
