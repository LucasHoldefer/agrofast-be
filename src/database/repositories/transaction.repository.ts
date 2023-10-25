import { type Prisma } from '@prisma/client';
import { prismaService } from '../prismaService';

export class TransactionsRepository {
  create(createDto: Prisma.TransactionCreateArgs) {
    return prismaService.transaction.create(createDto);
  }

  findAllByUserId(findManyDto: Prisma.TransactionFindManyArgs) {
    return prismaService.transaction.findMany(findManyDto);
  }

  update(updateDto: Prisma.TransactionUpdateArgs) {
    return prismaService.transaction.update(updateDto);
  }

  findFirst(findFirstDto: Prisma.TransactionFindFirstArgs) {
    return prismaService.transaction.findFirst(findFirstDto);
  }

  delete(findFirstDto: Prisma.TransactionDeleteArgs) {
    return prismaService.transaction.delete(findFirstDto);
  }
}
