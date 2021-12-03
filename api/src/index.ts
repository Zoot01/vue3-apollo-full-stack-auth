import 'dotenv/config';
import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';
import { verify } from 'jsonwebtoken';
import { User } from './entity/User';

(async () => {
  const app: Application = express();
  //body-parser middleware
  app.use(express.json());
  const port: number = 2323;

  app.use(cookieParser());

  app.use(
    cors({
      credentials: true,
      origin: ['https://studio.apollographql.com', 'http://localhost:3000'],
    })
  );

  //. create database connection
  const connection = await createConnection();

  if (connection) {
    console.log('✅ Connection to DB successfully ✅');
  }

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  try {
    app.listen(port, (): void => {
      console.log(`🚀 Connected successfully on port ${port} 🚀`);
    });
  } catch (error) {
    console.error(`Error occured: ${error.message}`);
  }
})();
