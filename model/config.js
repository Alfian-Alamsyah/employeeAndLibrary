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
export function connectDb(){
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });

    const forceSync = true
    sequelize.sync({force:forceSync}).then(() => {
        console.log('table created successfully!');
    }).catch((error) => {
    console.error('Unable to create table : ', error);
    });
}