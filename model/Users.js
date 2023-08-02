import { Sequelize,DataTypes  } from "sequelize";
import { sequelize } from "./config.js";
import { Books } from "./Books.js";




export const Users = sequelize.define("users", {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
},{underscored:true});


Users.belongsTo(Books)





