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

app.use('/restaurants', restaurantRoutes);
app.use('/couriers', courierRoutes);
app.use('/clients', clientRoutes);
app.use('/orders', orderRoutes);
app.use('/menus', menuRoutes);


export default app;
