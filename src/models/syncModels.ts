import sequelize from "config/sequelize";
import "./playerModel";
import "./chatroomModel";

// Sync all models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log("== MODELS SYNCED ==");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
})();
