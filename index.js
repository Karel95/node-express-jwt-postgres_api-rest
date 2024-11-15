import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.route.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
//app.use(cors({ origin: ['http://localhost:5173', 'http://otro-dominio.com'] }));
//app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
