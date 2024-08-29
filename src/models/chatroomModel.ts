import { Model, DataTypes } from "sequelize";
import sequelize from "config/sequelize";
import Player from "models/playerModel";

// Chatroom model
class Chatroom extends Model {
  public id!: number;
  public name!: string;
}

Chatroom.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

// Define the association
Chatroom.hasMany(Player, {
  sourceKey: "id",
  foreignKey: "chatroomId",
  as: "players",
});

export default Chatroom;
