import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from './routes';

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('listening on ' + port);
});
