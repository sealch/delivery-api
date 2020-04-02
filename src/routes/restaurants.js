import { Router } from 'express'
const router = Router();

import {
    createRestaurant,
    deleteRestaurant,
    getRestaurants,
    getOneRestaurant,
    updateRestaurant
} from '../controllers/restaurants.controller';

router.get('/', getRestaurants);
router.post('/', createRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);
router.get('/:id', getOneRestaurant);

export default router;
