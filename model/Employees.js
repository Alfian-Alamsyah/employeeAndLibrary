import { Sequelize,DataTypes  } from "sequelize";
import { sequelize } from "./config.js";




export const Employees = sequelize.define("employees", {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employeeCode: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{underscored:true});




