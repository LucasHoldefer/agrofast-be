import { Router } from 'express';
import jsonwebtoken from 'jsonwebtoken';

const router = Router();

// Rota para criar um novo usuário
router.use('', (req, res, next) => {
  jsonwebtoken.verify(req.headers.authorization.replaceAll('Bearer ', ''), process.env.JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({
        title: 'Authentication failed',
        error: err,
      });
    }
    next();
    return null;
  });
});

export default router;
