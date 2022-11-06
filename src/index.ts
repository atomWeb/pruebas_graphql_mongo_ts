import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schema";
import cors from "cors";
import { PORT } from "./config/app-conf";
import { appDataSource } from "./config/database";
import { Repository } from "typeorm";
import { User } from "./entity/User";

export type Context = {
  orm: {
    userRepository: Repository<User>;
  };
};

async function startApolloServer() {
  try {
    const app: Application = express();
    app.use(cors());

    const userRepository = appDataSource.getRepository(User);
    const context: Context = {
      orm: {
        userRepository: userRepository,
      },
    };

    const server: ApolloServer = new ApolloServer({
      schema,
      context,
    });
    await server.start();
    server.applyMiddleware({
      app,
      path: "/graphql",
    });

    await appDataSource.initialize();
    console.log("Database initialized");

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log({ error });
  }
}

startApolloServer();
