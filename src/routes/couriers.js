import { Router } from 'express'
const router = Router();

import { getCouriers } from '../controllers/couriers.controller';

router.get('/', getCouriers);

export default router;
