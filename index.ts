import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
require('dotenv').config();

const app = express();
const URL = process.env.APP_URL || 'http://localhost';
const PORT = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3002;

app.use(cors({
    origin: `${URL}:${PORT}`
}));

app.use(express.json());

app.use(rateLimit({
    windowMs: Number(process.env.RATE_LIMITER_WINDOW_MS),
    max: Number(process.env.RATE_LIMITER_MAX)
}));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT} port`);
});