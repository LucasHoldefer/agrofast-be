import { Request, Response } from 'express';
import {
  createAreaService, deleteAreaService, listAreaService,
  updateAreaService, validateAreaUser
} from '../services/area.service';
import { activeUserId } from '../utils/activeUserId';
import { CustomError } from '../utils/customError';


export async function listArea(req: Request, res: Response) {
  const userId = activeUserId(req.headers.authorization);

  try {
    const response = await listAreaService(userId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function createArea(req: Request, res: Response) {



  const userId = activeUserId(req.headers.authorization);
  const { name, description } = req.body;

  try {
    const response = await createAreaService({ name, description }, userId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function updateArea(req: Request, res: Response) {
  try {
    const { areaId } = req.params;

    const userId = activeUserId(req.headers.authorization);

    await validateAreaUser(userId, areaId);

    const { name, description } = req.body;

    const response = await updateAreaService({ name, description }, areaId);

    res.status(200).json(response);
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}

export async function deleteArea(req: Request, res: Response) {
  try {
    const { areaId } = req.params;

    const userId = activeUserId(req.headers.authorization);

    await validateAreaUser(userId, areaId);

    await deleteAreaService(areaId);

    res.status(201).json();
  } catch (erro) {
    if (erro instanceof CustomError) {
      res.status(erro.code).json({ erro: erro.message });
    }
  }
}
