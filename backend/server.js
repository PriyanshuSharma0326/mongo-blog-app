import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import blogRouter from './routes/blogRoutes.js';

const app = express();
dotenv.config();
const PORT = 5000;

// app.use(express.static('../frontend'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Mongo Blog app server!</h1>');
});

app.use('/api/v1/blogs', blogRouter);

mongoose.connect(process.env.CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});
