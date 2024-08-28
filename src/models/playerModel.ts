import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

// Define the User model
const Player = sequelize.define('Player', {
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