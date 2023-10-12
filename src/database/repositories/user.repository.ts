import { type Prisma } from '@prisma/client';
import { prismaService } from '../prismaService';

export class UsersRepository {

  create(createDto: Prisma.UserCreateArgs) {
    return prismaService.user.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return prismaService.user.findUnique(findUniqueDto);
  }
}
