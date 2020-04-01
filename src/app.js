import express, { json } from 'express'
import morgan from 'morgan'

const app = express();

import orderRoutes from './routes/orders';

app.use(morgan('dev'));
app.use(json());

app.use('/api/orders', orderRoutes);

export default app;
