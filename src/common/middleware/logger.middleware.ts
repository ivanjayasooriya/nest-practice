import { NextFunction, Request, Response } from 'express';

// Middleware function to log incoming requests
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request... ${req.method} ${req.originalUrl}`);
  next();
}
