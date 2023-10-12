import { Router } from 'express';
import { signup, signin } from '../controllers/auth.controller';

const router = Router();

// Rota para criar um novo usuário
router.post('/auth/signup', signup);

// Rota para logar
router.post('/auth/signin', signin);

export default router;