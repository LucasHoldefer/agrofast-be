import { Router } from 'express';
import { check } from 'express-validator';
import { signin, signup } from '../controllers/auth.controller';

const router = Router();

// Rota para criar um novo usuário
router.post('/auth/signup', [
  check('name').isString().notEmpty(),
  check('email').isString().notEmpty(),
  check('password').isString().notEmpty(),
], signup);

// Rota para logar
router.post('/auth/signin', [
  check('email').isString().notEmpty(),
  check('password').isString().notEmpty(),
], signin);

export default router;
