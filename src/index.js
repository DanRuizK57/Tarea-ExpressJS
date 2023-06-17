import express from 'express';
import cors from 'cors';
import envs from './configs/environments.js';
import calculatorRoutes from './routes/calculadora.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('', calculatorRoutes);

app.listen(envs, () => {
    console.log(`Server is running on PORT: ${envs}`)
});