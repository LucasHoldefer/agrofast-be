import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function validadeFormatRequest(req: Request, res: Response) {

  const errors = await validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
}
