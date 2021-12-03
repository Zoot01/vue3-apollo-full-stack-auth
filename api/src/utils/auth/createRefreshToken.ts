import { sign } from 'jsonwebtoken';
import { User } from '../../entity/User';

export const createRefreshToken = (user: User) => {
  return sign(
    {
      userId: user.id,
      tokenVersion: user.tokenVersion,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
