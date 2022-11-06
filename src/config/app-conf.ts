// import { config } from "dotenv";
import dotenv from "dotenv";
dotenv.config({ path: process.cwd() + "/.env" });

export const PORT = process.env.APP_PORT || 8080;

export const DB_NAME = process.env.DB_NAME;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const MONGO_URL = process.env.MONGO_URL;