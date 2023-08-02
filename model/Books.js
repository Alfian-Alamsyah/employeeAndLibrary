import { Sequelize,DataTypes  } from "sequelize";
import { sequelize } from "./config.js";








export const Books = sequelize.define("books", {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
},{underscored:true});




