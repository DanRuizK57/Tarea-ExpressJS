import express from 'express';
import cors from 'cors';
import envs from './configs/environments.js';
import calculatorRoutes from './routes/calculadora.routes.js';
import operationsRoutes from './routes/operaciones.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('', calculatorRoutes);
app.use('/operations', operationsRoutes);

app.listen(envs, () => {
    console.log(`Server is running on PORT: ${envs}`)
});