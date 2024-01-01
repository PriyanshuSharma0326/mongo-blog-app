import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Blog app server!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
