import sqLite from "config/sqLite";
import "./playerModel";

// Sync all models with the database
(async () => {
  try {
    await sqLite.sync();
    console.log("All models synced with the database");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
})();
