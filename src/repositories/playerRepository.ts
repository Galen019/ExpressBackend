import Player from "models/playerModel";

class PlayerRepository {
  // Helper function to handle errors
  private handleError(error: unknown, action: string) {
    if (error instanceof Error) {
      throw new Error(`Error ${action}: ${error.message}`);
    } else {
      throw new Error(`Unknown error ${action}`);
    }
  }

  // Create a new player
  async createPlayer(name: string, isReady: boolean = false) {
    try {
      const player = await Player.create({ name, isReady });
      return player;
    } catch (error) {
      this.handleError(error, "creating player");
    }
  }

  // Get a player by ID
  async getPlayerById(id: number) {
    try {
      const player = await Player.findByPk(id);
      if (!player) {
        throw new Error("Player not found");
      }
      return player;
    } catch (error) {
      this.handleError(error, "fetching player by id");
    }
  }

  // Get a player by name
  async getPlayerByName(name: string) {
    try {
      const player = await Player.findOne({ where: { name } });
      if (!player) {
        throw new Error("Player not found");
      }
      return player;
    } catch (error) {
      this.handleError(error, "fetching player by name");
    }
  }

  // Get all players
  async getAllPlayers() {
    try {
      return await Player.findAll();
    } catch (error) {
      this.handleError(error, "fetching players");
    }
  }

  // Update a player by ID
  async updatePlayer(
    id: number,
    updateData: Partial<{ name: string; isReady: boolean }>
  ) {
    try {
      const player = await Player.findByPk(id);
      if (!player) {
        throw new Error("Player not found");
      }
      await player.update(updateData);
      return player;
    } catch (error) {
      this.handleError(error, "updating player");
    }
  }

  // Delete a player by ID
  async deletePlayer(id: number) {
    try {
      const player = await Player.findByPk(id);
      if (!player) {
        throw new Error("Player not found");
      }
      await player.destroy();
      return { message: "Player deleted successfully" };
    } catch (error) {
      this.handleError(error, "deleting player");
    }
  }

  // Delete a player by name
  async deletePlayerByName(name: string) {
    try {
      const player = await Player.findOne({ where: { name } });
      if (!player) {
        throw new Error("Player not found");
      }
      await player.destroy();
      return { message: "Player deleted successfully" };
    } catch (error) {
      this.handleError(error, "deleting player");
    }
  }
}

export default new PlayerRepository();
