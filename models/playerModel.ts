import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize'; // Import the Sequelize instance

// Define the User model
const Player = sequelize.define('User', {
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

// Sync the model with the database
(async () => {
    try {
        await sequelize.sync();
        console.log('User model synced with the database');
    } catch (error) {
        console.error('Error syncing User model:', error);
    }
})();

export default Player;