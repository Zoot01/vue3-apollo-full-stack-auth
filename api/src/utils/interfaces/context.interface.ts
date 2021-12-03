import { Request, Response } from 'express';

export interface contextInterface {
  req: Request;
  res: Response;
  payload?: { accessToken: string };
}
