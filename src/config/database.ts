import { DataSource } from "typeorm";
import { MONGO_URL } from "./app-conf";

export const appDataSource = new DataSource({
  type: "mongodb",
  url: MONGO_URL,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  useUnifiedTopology: true,
  entities: ["src/entity/*.*"],
});
