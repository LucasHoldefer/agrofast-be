import { TransactionType } from '@prisma/client';
import { TransactionsRepository } from '../database/repositories/transaction.repository';
import { CustomError } from '../utils/customError';

export async function listTransactionService(userId: string) {
  const transactionsRepository = new TransactionsRepository();

  const area = await transactionsRepository.findAllByUserId({
    where: {
      userId,
    },
  });

  return area;
}

export async function createTransactionService(transactions: { name: string, description: string, value: number, date: string, type: TransactionType }, userId: string) {
  const transactionsRepository = new TransactionsRepository();

  const { name, description, value, date, type } = transactions;

  const transaction = await transactionsRepository.create({
    data: {
      name,
      description,
      value,
      date: date ? new Date(date) : null,
      type,
      userId,
    },
  });

  return transaction;
}

export async function updateTransactionService(transactions: { name: string, description: string, value: number, date: string, type: TransactionType }, transactionId: string) {
  const transactionsRepository = new TransactionsRepository();

  const { name, description, value, date, type } = transactions;

  const transaction = await transactionsRepository.update({
    where: {
      id: transactionId,
    },
    data: {
      name,
      description,
      value,
      date: date ? new Date(date) : null,
      type
    },
  });

  return transaction;
}

export async function deleteTransactionService(transactionId: string) {
  const transactionsRepository = new TransactionsRepository();

  const transaction = await transactionsRepository.delete({
    where: {
      id: transactionId,
    },
  });

  return transaction;
}

export async function validateTransactionUser(userId: string, transactionId: string) {
  const transactionsRepository = new TransactionsRepository();

  const isOwner = await transactionsRepository.findFirst({
    where: {
      userId,
      id: transactionId,
    },
  });

  console.log({ isOwner });

  if (!isOwner) {
    throw new CustomError(404, 'Transaction not foud.');
  }
}
