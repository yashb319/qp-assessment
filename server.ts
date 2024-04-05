import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/admin', adminRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port",PORT);
});