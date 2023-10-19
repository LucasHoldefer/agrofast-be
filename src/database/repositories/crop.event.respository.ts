import { type Prisma } from '@prisma/client';
import { prismaService } from '../prismaService';

export class CropsEventRepository {
  create(createDto: Prisma.CropEventCreateArgs) {
    return prismaService.cropEvent.create(createDto);
  }

  findAllByCropId(findManyDto: Prisma.CropEventFindManyArgs) {
    return prismaService.cropEvent.findMany(findManyDto);
  }

  findAllByAreaId(findManyDto: Prisma.CropEventFindManyArgs) {
    return prismaService.cropEvent.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.CropEventFindFirstArgs) {
    return prismaService.cropEvent.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.CropEventUpdateArgs) {
    return prismaService.cropEvent.update(updateDto);
  }

  delete(findFirstDto: Prisma.CropEventDeleteArgs) {
    return prismaService.cropEvent.delete(findFirstDto);
  }
}
