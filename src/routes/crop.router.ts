import { Router } from 'express';
import { createCrop, deleteCrop, listCrop, updateCrop } from '../controllers/crop.controller';

const router = Router();

// Rota para obter areas
router.get('/crops', listCrop);

router.post('/crops', createCrop);

router.put('/crops/:cropId', updateCrop);

router.delete('/crops/:cropId', deleteCrop);

export default router;
