import { Router } from 'express'
const router = Router();

import { getClients } from '../controllers/clients.controller';

router.get('/', getClients);

export default router;
