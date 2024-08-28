import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// Create a new Sequelize instance using SQLite in-memory
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:', // Use SQLite in-memory storage
});

// Export the Sequelize instance
export default sequelize;