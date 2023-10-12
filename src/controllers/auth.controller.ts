import { Request, Response } from 'express';
import { authenticateUser, createUser } from '../services/auth.service';
import { CustomError } from '../utils/cusomError';

export async function signup(req: Request, res: Response) {
   try {
      const response = await createUser(req.body);
      return res.json(response);
   } catch (erro) {
      if (erro instanceof CustomError) {
         res.status(erro.code).json({ erro: erro.message });
      }
   }
};

export async function signin(req: Request, res: Response) {
   try {
      const response = await authenticateUser(req.body);
      return res.json(response);
   } catch (erro) {
      if (erro instanceof CustomError) {
         res.status(erro.code).json({ erro: erro.message });
      }
   }
};


