// Set environment variables
process.env.NODE_ENV = "test";

import sequelize from "config/sequelize";
import "models/playerModel";

// Async method to sync all models with the database
export const syncModels = async () => {
  try {
    await sequelize.sync();
    console.log("All models synced with the database");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
};

export default sequelize;
