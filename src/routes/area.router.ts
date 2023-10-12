import { Router } from 'express';
import { createArea, listArea, updateArea } from '../controllers/area.controller';

const router = Router();

// Rota para obter areas
router.get('/areas', listArea);

router.post('/areas', createArea);

router.put('/areas/:areaId', updateArea);

export default router;
