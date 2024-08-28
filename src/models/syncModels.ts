import sequelize from '../config/sequelize';
import './playerModel';

// Sync all models with the database
(async () => {
    try {
        await sequelize.sync();
        console.log('All models synced with the database');
    } catch (error) {
        console.error('Error syncing models:', error);
    }
})();