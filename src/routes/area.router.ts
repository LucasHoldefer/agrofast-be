import { Router } from 'express';
import { createArea, deleteArea, listArea, updateArea } from '../controllers/area.controller';

const router = Router();

// Rota para obter areas
router.get('/areas', listArea);

router.post('/areas', createArea);

router.put('/areas/:areaId', updateArea);

router.delete('/areas/:areaId', deleteArea);

export default router;
