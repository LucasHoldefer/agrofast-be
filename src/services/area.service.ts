import { AreasRepository } from '../database/repositories/area.repository';
import { CustomError } from '../utils/cusomError';

export async function listAreaService(userId: string) {
  const areasRepository = new AreasRepository();

  const area = await areasRepository.findAllByUserId({
    where: {
      userId,
    },
  });

  return area;
}

export async function createAreaService(areas: { name: string, description: string }, userId: string) {
  const areasRepository = new AreasRepository();

  const { name, description } = areas;

  const area = await areasRepository.create({
    data: {
      name,
      description,
      userId,
    },
  });

  return area;
}

export async function updateAreaService(areas: { name: string, description: string }, areaId: string) {
  const areasRepository = new AreasRepository();

  const { name, description } = areas;

  const area = await areasRepository.update({
    where: {
      id: areaId,
    },
    data: {
      name,
      description,
    },
  });

  return area;
}

export async function deleteAreaService(areaId: string) {
  const areasRepository = new AreasRepository();

  const area = await areasRepository.delete({
    where: {
      id: areaId,
    },
  });

  return area;
}

export async function validateAreaUser(userId: string, transactionId: string) {
  const areasRepository = new AreasRepository();

  const isOwner = await areasRepository.findFirst({
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
