import { Books } from "./Books.js";
import { Employees } from "./Employees.js";
import { Users } from "./Users.js";
import { sequelize } from "./config.js";

export async function connectDb(){
    await sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });

    const forceSync = true

    if(forceSync){
        await Books.drop()
        console.log('Books table droped.');
        await Users.drop()
        console.log('Users table droped.');
        await Employees.drop()
        console.log('Employees table droped.');
    }
    
    await Users.sync();
    console.log('Users table recreated.');
    await Books.sync();
    console.log('Books table recreated.');
    await Employees.sync();
    console.log('Employees table recreated.');
}