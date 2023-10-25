import { Request, Response } from 'express';
import { activeUserId } from '../utils/activeUserId';
import { CustomError } from '../utils/customError';
import { createCropEventService, deleteCropEventService, listCropEventService, updateCropEventService, validateCropCropEvent } from './../services/crop.event.service';

export async function listCropEvent(req: Request, res: Response) {
  const { cropId } = req.params;

  try {
    const response = await listCropEventService(cropId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function createCropEvent(req: Request, res: Response) {

  try {

    const { cropId, name, description, fertilizer, quantityFertilizer, workforce, startDate, endDate } = req.body;

    const response = await createCropEventService({ cropId, name, description, fertilizer, quantityFertilizer, workforce, startDate, endDate });

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function updateCropEvent(req: Request, res: Response) {


  try {
    const { cropEventId } = req.params;

    const { name, description, fertilizer, quantityFertilizer, workforce, startDate, endDate } = req.body;

    const response = await updateCropEventService({ name, description, fertilizer, quantityFertilizer, workforce, startDate, endDate }, cropEventId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function deleteCropEvent(req: Request, res: Response) {
  try {
    const userId = activeUserId(req.headers.authorization);

    const { cropEventId } = req.params;

    await validateCropCropEvent(cropEventId, userId);

    await deleteCropEventService(cropEventId);

    return res.status(201).json();

  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}
