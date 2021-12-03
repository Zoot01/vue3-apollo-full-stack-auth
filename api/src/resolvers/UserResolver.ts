import { Arg, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql';
import { User } from '../entity/User';
import { hash, compare } from 'bcryptjs';
import { contextInterface } from '../utils/interfaces/context.interface';
import { getConnection } from 'typeorm';
import { createAccessToken } from '../utils/auth/createAccessToken';
import { authMiddleware } from '../utils/auth/authMiddleware';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

//. type for creating a user
@InputType()
class createUserWithRelation {
  @Field(() => String)
  firstName: string;
  @Field(() => String)
  lastName: string;
  @Field(() => String)
  username: string;
  @Field(() => Int)
  password: number;
}

@Resolver()
export class UserResolver {
  //. route for testing reasons
  @Query(() => String)
  hello() {
    return 'Hello from apollo 🚀 graphQl.';
  }

  // . register a new user
  @Mutation(() => User, { description: 'Used to created a new user in the database' })
  async registerUser(@Arg('user', () => User) user: User) {
    const hashedPassword = await hash(user.password, 12);
    try {
      const createdUser = getConnection()
        .getRepository(User)
        .create({
          ...user,
          password: hashedPassword,
        })
        .save();
      return createdUser;
    } catch (err) {
      console.log(err);
      throw Error('User with this email already exist. Please login.');
    }
  }

  // . login a user
  @Mutation(() => LoginResponse, { description: 'Used to login the user. Returns a JWT access token.' })
  async loginUser(
    @Arg('email', () => String) email: string,
    @Arg('password', () => String) password: string,
    @Ctx() { res }: contextInterface
  ): Promise<LoginResponse> {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('Could not find user.');
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error('password does not match.');
    }

    // ! login was a success
    //  TODO send refreshToken
    // TODO sendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
    };
  }

  //. confirm accessToken
  @Mutation(() => Boolean, {
    description: 'Returns a true or false, access token is valid: "true", accessToken is not vaild: "false"',
  })
  @UseMiddleware(authMiddleware)
  isAuth(@Ctx() { payload }: contextInterface) {
    console.log('🔒 user auth payload 🔒 \n', payload);
    return true;
  }
}
