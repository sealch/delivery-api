import { Router } from 'express'
const router = Router();

import {
    getOrders,
    createOrder,
    getOneOrder,
    confirmDelivery,
    getOrderByCourier
} from '../controllers/orders.controller';

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:id', getOneOrder);
router.post('/:id', confirmDelivery);
router.get('/courier/:id', getOrderByCourier);

export default router;
