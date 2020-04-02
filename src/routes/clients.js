import { Router } from 'express'
const router = Router();

import {
    getClients,
    updateClient,
    createClient,
    getOneClient,
    deleteClient
} from '../controllers/clients.controller';

router.get('/', getClients);
router.post('/', createClient);
router.get('/:id', getOneClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;
