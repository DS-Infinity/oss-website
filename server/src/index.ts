import dotenv from 'dotenv';
dotenv.config();

import 'module-alias/register';

import express, { Application } from 'express';
import authRouter from '../routes/authRoutes';
import projectRouter from '../routes/projectRoutes';
import mongoose from 'mongoose';

const app: Application = express();

mongoose
  .connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB.......'))
  .catch((err) => console.log(err));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  next();
});

app.use(express.json());
app.use('/auth', authRouter);
app.use('/project', projectRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
