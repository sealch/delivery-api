import { Router } from 'express'
const router = Router();

import {
    deleteMenu,
    createMenu,
    updateMenu,
    getOneMenu,
    getMenus,
} from '../controllers/menus.controller';


router.get('/', getMenus);
router.post('/', createMenu);
router.get('/:id', getOneMenu);
router.put('/:id', updateMenu);
router.delete('/:id', deleteMenu);

export default router;
