import express, { json } from 'express'
import morgan from 'morgan'

const app = express();

import restaurantRoutes from './routes/restaurants';
import courierRoutes from './routes/couriers';
import clientRoutes from './routes/clients';
import orderRoutes from './routes/orders';
import menuRoutes from './routes/menus';


app.use(morgan('dev'));
app.use(json());

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/couriers', courierRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/menus', menuRoutes);


export default app;
