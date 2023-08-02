import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize(
//     'freedb_my_datas',
//     'freedb_alfian',
//     'VU$FN2Zu7fBkHk3',
//      {
//        host: 'sql.freedb.tech',
//        dialect: 'mysql',
//        dialectOptions: {
//         connectTimeout:100000
//         },
//        port:3306
//      }
// );
export const sequelize = new Sequelize(
    'employee_express',
    'root',
    '1234567',
     {
       host: 'localhost',
       dialect: 'mysql',
       dialectOptions: {
        connectTimeout:100000
        },
       port:3306
     }
);


export function db(){

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });

    sequelize.sync({force:false}).then(() => {
        console.log('Users2 table created successfully!');
    }).catch((error) => {
    console.error('Unable to create table : ', error);
    });
    

}