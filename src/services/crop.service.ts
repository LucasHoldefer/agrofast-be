
import { CropsRepository } from '../database/repositories/crop.respository';
import { CustomError } from './../utils/cusomError';

export async function listCropService(userId: string, areaId?: any) {
  const cropRepository = new CropsRepository();

  const area = await cropRepository.findAllByUserId({
    where: {
      userId,
      areaId
    },
  });

  return area;
}

export async function listCropByAreaService(userId: string) {
  const cropRepository = new CropsRepository();

  const area = await cropRepository.findAllByUserId({
    where: {
      userId,
    },
  });

  return area;
}


export async function createCropService(areas: { name: string, description: string, areaId: string }, userId: string) {
  const cropsRepository = new CropsRepository();

  const { name, description, areaId } = areas;

  console.log({ name, description, areaId, userId });

  const crop = await cropsRepository.create({
    data: {
      name,
      description,
      userId,
      areaId,
    },
  });

  return crop;
}

export async function updateCropService(crop: { name: string, description: string, startDate: string, endDate: string }, cropId: string) {
  const cropsRepository = new CropsRepository();

  const {name, description, startDate, endDate } = crop;

  const crops = await cropsRepository.update({
    where: {
      id: cropId,
    },
    data: {
      name,
      description,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    },
  });

  return crops;
}

export async function deleteCropService(cropId: string) {
  const cropsRepository = new CropsRepository();

  const crop = await cropsRepository.delete({
    where: {
      id: cropId,
    },
  });

  return crop;
}



export async function validateCropUser(userId: string, cropId: string) {
  const cropsRepository = new CropsRepository();

  const isOwner = await cropsRepository.findFirst({
    where: {
      userId,
      id: cropId,
    },
  });

  console.log({ isOwner });

  if (!isOwner) {
    throw new CustomError(404, 'Transaction not foud.');
  }
}
