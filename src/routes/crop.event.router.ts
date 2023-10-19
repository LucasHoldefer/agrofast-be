import { Router } from 'express';
import { createCropEvent, deleteCropEvent, listCropEvent, updateCropEvent } from '../controllers/crop.event.controller';

const router = Router();

// Rota para obter areas
router.get('/cropsevent', listCropEvent);

router.post('/cropsevent', createCropEvent);

router.put('/cropsevent/:cropEventId', updateCropEvent);

router.delete('/cropsevent/:cropEventId', deleteCropEvent);

export default router;
