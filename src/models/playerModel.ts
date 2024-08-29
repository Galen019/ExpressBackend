import { Model, DataTypes } from "sequelize";
import sequelize from "config/sequelize";

// Define the Player model
class Player extends Model {
  public id!: number;
  public name!: string;
  public isReady!: boolean;
}

// Initialize the Player model
Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isReady: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize, // Pass the sequelize instance
  }
);

export default Player;
