import { verify } from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql/dist/interfaces/Middleware';
import { contextInterface } from '../interfaces/context.interface';

export const authMiddleware: MiddlewareFn<contextInterface> = ({ context }, next) => {
  const authorization = context.req.headers['authorization'];

  if (!authorization) {
    throw new Error('No authorization.');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!payload) {
      throw new Error('No authorization.');
    }
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error('No authorization.');
  }
  return next();
};
