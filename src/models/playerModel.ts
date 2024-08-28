import { DataTypes } from "sequelize";
import sqLite from "config/sequelize";

// Define the User model
const Player = sqLite.define("Player", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isReady: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Player;
