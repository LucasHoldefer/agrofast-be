import { Request, Response } from 'express';
import {
  createCropService,
  deleteCropService,
  listCropByAreaService,
  listCropService,
  updateCropService,
  validateCropUser
} from '../services/crop.service';
import { activeUserId } from '../utils/activeUserId';
import { CustomError } from '../utils/cusomError';

export async function listCrop(req: Request, res: Response) {
  const userId = activeUserId(req.headers.authorization);

  const { areaId } = req.query;

  try {
    const response = await listCropService(userId, areaId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function listCropByArea(req: Request, res: Response) {
  const userId = activeUserId(req.headers.authorization);

  try {
    const response = await listCropByAreaService(userId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}


export async function createCrop(req: Request, res: Response) {
  const userId = activeUserId(req.headers.authorization);
  const { name, description, areaId } = req.body;

  try {
    const response = await createCropService({ name, description, areaId }, userId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function updateCrop(req: Request, res: Response) {
  try {
    const { cropId } = req.params;

    const userId = activeUserId(req.headers.authorization);

    await validateCropUser(userId, cropId);

    const { name, description, startDate, endDate } = req.body;

    const response = await updateCropService({ name, description, startDate, endDate }, cropId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function deleteCrop(req: Request, res: Response) {
  try {
    const { cropId } = req.params;

    const userId = activeUserId(req.headers.authorization);

    await validateCropUser(userId, cropId);

    await deleteCropService(cropId);

    res.status(201).json();
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}
