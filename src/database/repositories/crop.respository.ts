import { type Prisma } from '@prisma/client';
import { prismaService } from '../prismaService';

export class CropsRepository {
  create(createDto: Prisma.CropCreateArgs) {
    return prismaService.crop.create(createDto);
  }

  findAllByUserId(findManyDto: Prisma.CropFindManyArgs) {
    return prismaService.crop.findMany(findManyDto);
  }

  findAllByAreaId(findManyDto: Prisma.CropFindManyArgs) {
    return prismaService.crop.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.CropFindFirstArgs) {
    return prismaService.crop.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.CropUpdateArgs) {
    return prismaService.crop.update(updateDto);
  }

  delete(findFirstDto: Prisma.CropDeleteArgs) {
    return prismaService.crop.delete(findFirstDto);
  }
}
