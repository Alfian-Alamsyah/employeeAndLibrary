import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
        port: 3306,
        dialectOptions: {
            connectTimeout:100000
        }
    }
);
