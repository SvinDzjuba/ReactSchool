import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './config/database.js';
import departmentRoute from './routes/departmentRoute.js';
import professionRoute from './routes/professionRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database connected!');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());

app.use('/department', departmentRoute);
app.use('/profession', professionRoute);
app.use('/users', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`-- Server listening on port ${PORT} --`);
});