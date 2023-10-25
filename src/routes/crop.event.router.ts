import { Router } from 'express';
import { check } from 'express-validator';
import { createCropEvent, deleteCropEvent, listCropEvent, updateCropEvent } from '../controllers/crop.event.controller';

const router = Router();

// Rota para obter areas
router.get('/cropsevent', listCropEvent);

router.post('/cropsevent',
  [
    check('cropId').isUUID().notEmpty(),
    check('name').isString().notEmpty(),
    check('description').isString(),
    check('fertilizer').isString(),
    check('quantityFertilizer').isNumeric(),
    check('workforce').isString(),
    check('startDate').isDate({ format: 'yyyy-MM-dd' }),
    check('endDate').isDate({ format: 'yyyy-MM-dd' }),
  ],
  createCropEvent);

router.put('/cropsevent/:cropEventId',
  [
    check('cropId').isUUID().notEmpty(),
    check('name').isString().notEmpty(),
    check('description').isString(),
    check('fertilizer').isString(),
    check('quantityFertilizer').isNumeric(),
    check('workforce').isString(),
    check('startDate').isDate({ format: 'yyyy-MM-dd' }),
    check('endDate').isDate({ format: 'yyyy-MM-dd' }),
  ],
  updateCropEvent);

router.delete('/cropsevent/:cropEventId', deleteCropEvent);

export default router;
