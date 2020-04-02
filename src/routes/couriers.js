import { Router } from 'express'
const router = Router();

import {
    createCourier,
    deleteCourier,
    getCouriers,
    getOneCourier,
    mostVisited,
    totalOrders,
    updateCourier
} from '../controllers/couriers.controller';

router.get('/', getCouriers);
router.post('/', createCourier);
router.put('/:id', updateCourier);
router.get('/:id', getOneCourier);
router.delete('/:id', deleteCourier);
router.get('/totalOrders/:id', totalOrders);
router.get('/mostVisited/:id', mostVisited);

export default router;
