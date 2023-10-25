import { Router } from 'express';
import { createTransaction, deleteTransaction, listTransaction, updateTransaction } from './../controllers/transaction.controller';

const router = Router();

// Rota para obter areas
router.get('/transactions', listTransaction);

router.post('/transactions', createTransaction);

router.put('/transactions/:transactionId', updateTransaction);

router.delete('/transactions/:transactionId', deleteTransaction);

export default router;
