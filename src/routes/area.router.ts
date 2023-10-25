import { Router } from 'express';
import { check } from 'express-validator';
import { createArea, deleteArea, listArea, updateArea } from '../controllers/area.controller';


const router = Router();

// Rota para obter areas
router.get('/areas', listArea);

router.post('/areas', [
  check('name').isString().notEmpty(),
  check('description').isString(),
], createArea);

router.put('/areas/:areaId', [
  check('name').isString().notEmpty(),
  check('description').isString(),
], updateArea);

router.delete('/areas/:areaId', deleteArea);

export default router;
