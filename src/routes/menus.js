import { Router } from 'express'
const router = Router();

import { getMenus } from '../controllers/menus.controller';

router.get('/', getMenus);

export default router;
