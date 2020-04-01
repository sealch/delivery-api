import { Router } from 'express'
const router = Router();

import { getRestaurants } from '../controllers/restaurants.controller';

router.get('/', getRestaurants);

export default router;
