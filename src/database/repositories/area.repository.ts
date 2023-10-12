import { type Prisma } from '@prisma/client';
import { prismaService } from '../prismaService';

export class AreasRepository {

  create(createDto: Prisma.AreaCreateArgs) {
    return prismaService.area.create(createDto);
  }

  finAllByUserId(findManyDto: Prisma.AreaFindManyArgs) {
    return prismaService.area.findMany(findManyDto);
  }

  update(updateDto: Prisma.AreaUpdateArgs) {
    return prismaService.area.update(updateDto);
  }
  
  findFirst(findFirstDto: Prisma.AreaFindFirstArgs) {
    return prismaService.area.findFirst(findFirstDto);
  }
}
