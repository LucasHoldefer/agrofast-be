
import { CustomError } from '../utils/cusomError';
import { CropsEventRepository } from './../database/repositories/crop.event.respository';
import { CropsRepository } from './../database/repositories/crop.respository';

// export async function listCropService(userId: string, areaId?: any) {
//   const cropRepository = new CropsRepository();

//   const area = await cropRepository.findAllByUserId({
//     where: {
//       userId,
//       areaId
//     },
//   });

//   return area;
// }

export async function listCropEventService(cropId: string) {
  const cropsEventRepository = new CropsEventRepository();

  const area = await cropsEventRepository.findAllByCropId({
    where: {
      cropId,
    },
  });

  return area;
}


export async function createCropEventService(cropEvents: { cropId: string, name: string, description: string, fertilizer: string, quantityFertilizer: number, workforce: string, startDate: string, endDate: string }) {
  const cropsEventRepository = new CropsEventRepository();

  const { cropId, name, description, fertilizer, quantityFertilizer, workforce, startDate, endDate } = cropEvents;

  const cropEvent = await cropsEventRepository.create({
    data: {
      name,
      description,
      fertilizer,
      quantityFertilizer,
      workforce,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
      cropId,
    },
  });

  return cropEvent;
}

export async function updateCropEventService(crop: { name: string, description: string, fertilizer: string, quantityFertilizer: number, workforce: string, startDate: string, endDate: string }, cropEventId: string) {
  const cropsEventRepository = new CropsEventRepository();

  const { name, description, fertilizer, quantityFertilizer, workforce, startDate, endDate } = crop;

  const crops = await cropsEventRepository.update({
    where: {
      id: cropEventId,
    },
    data: {
      name,
      description,
      fertilizer,
      quantityFertilizer,
      workforce,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    },
  });

  return crops;
}

export async function deleteCropEventService(cropEventId: string) {
  const cropsEventRepository = new CropsEventRepository();

  const crop = await cropsEventRepository.delete({
    where: {
      id: cropEventId,
    },
  });

  return crop;
}



export async function validateCropCropEvent(cropEventId: string, userId: string) {
  const cropsEventRepository = new CropsEventRepository();
  const cropsRepository = new CropsRepository();

  const crop = await cropsEventRepository.findFirst({
    where: {
      id: cropEventId,
    },
    select: { cropId: true },
  });

  if (!crop) {
    throw new CustomError(404, 'Crop Event not foud.');
  }

  const isOwner = await cropsRepository.findFirst({
    where: {
      id: crop.cropId,
      userId
    }
  })

  if (!isOwner) {
    throw new CustomError(404, 'Crop Event not foud.');
  }
}
