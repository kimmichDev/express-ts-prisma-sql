import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer'
import { userRoutes } from './routes';
import { authRoutes } from './routes/authRoute';
import { errorMiddleware } from './middlewares/error';

dotenv.config();
const app: Express = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(upload.any())
app.use(cors());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// app.use('*', (error, req, res, next) => {
//     res.json(req.headers)
// })

app.use(errorMiddleware);
const port = process.env.PORT;
app.listen(port, () => {
    console.log('listening on ' + port);
});
