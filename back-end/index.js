import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import departmentRoute from './routes/departmentRoute.js';
import professionRoute from './routes/professionRoute.js';

const app = express();
try {
    await db.authenticate();
    console.log('Database connected!');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors());
app.use(express.json());
app.use('/department', departmentRoute);
app.use('/profession', professionRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`-- Server listening on port ${PORT} --`);
});