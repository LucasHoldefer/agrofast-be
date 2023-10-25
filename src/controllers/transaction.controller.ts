import { Request, Response } from 'express';
import { activeUserId } from '../utils/activeUserId';
import { CustomError } from '../utils/customError';
import { createTransactionService, deleteTransactionService, listTransactionService, updateTransactionService, validateTransactionUser } from './../services/transaction.service';

export async function listTransaction(req: Request, res: Response) {
  const userId = activeUserId(req.headers.authorization);

  try {
    const response = await listTransactionService(userId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function createTransaction(req: Request, res: Response) {


  const userId = activeUserId(req.headers.authorization);
  const { name, description, value, date, type } = req.body;

  try {
    const response = await createTransactionService({ name, description, value, date, type }, userId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function updateTransaction(req: Request, res: Response) {


  try {
    const { transactionId } = req.params;

    const userId = activeUserId(req.headers.authorization);

    await validateTransactionUser(userId, transactionId);

    const { name, description, value, date, type } = req.body;

    const response = await updateTransactionService({ name, description, value, date, type }, transactionId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function deleteTransaction(req: Request, res: Response) {
  try {
    const { transactionId } = req.params;

    const userId = activeUserId(req.headers.authorization);

    await validateTransactionUser(userId, transactionId);

    await deleteTransactionService(transactionId);

    res.status(201).json();
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}
