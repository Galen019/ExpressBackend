import PlayerRepository from "repositories/playerRepository";
import Player from "models/playerModel";
import { syncModels } from "../sequelize.test";

describe("PlayerRepository", () => {
  // Synchronize models before running any tests
  beforeAll(async () => {
    await syncModels();
  });

  beforeEach(async () => {
    await Player.destroy({ where: {} });
  });

  test("should create a new player", async () => {
    const player = await PlayerRepository.createPlayer("John Doe");
    expect(player).toBeDefined();
    expect(player!.name).toBe("John Doe");
  });

  test("should get a player by ID", async () => {
    const newPlayer = await PlayerRepository.createPlayer("Jane Doe");
    const player = await PlayerRepository.getPlayerById(newPlayer!.id);
    expect(player).toBeDefined();
    expect(player!.name).toBe("Jane Doe");
  });

  test("should get all players", async () => {
    await PlayerRepository.createPlayer("John Doe");
    await PlayerRepository.createPlayer("Jane Doe");
    const players = await PlayerRepository.getAllPlayers();
    expect(players!.length).toBe(2);
  });

  test("should update a player by ID", async () => {
    const newPlayer = await PlayerRepository.createPlayer("John Doe");
    const updatedPlayer = await PlayerRepository.updatePlayer(newPlayer!.id, {
      name: "newName",
    });
    expect(updatedPlayer!.name).toBe("newName");
  });

  test("should delete a player by ID", async () => {
    const newPlayer = await PlayerRepository.createPlayer("John Doe");
    const response = await PlayerRepository.deletePlayer(newPlayer!.id);
    expect(response!.message).toBe("Player deleted successfully");
    const player = await Player.findByPk(newPlayer!.id);
    expect(player).toBeNull();
  });

  test("should delete a player by name", async () => {
    await PlayerRepository.createPlayer("John Doe");
    const response = await PlayerRepository.deletePlayerByName("John Doe");
    expect(response!.message).toBe("Player deleted successfully");
    const player = await Player.findOne({ where: { name: "John Doe" } });
    expect(player).toBeNull();
  });

  test("should return true if the player exists", async () => {
    // Create a player
    await Player.create({ name: "John Doe" });

    // Check if the player exists
    const exists = await PlayerRepository.existsByName("John Doe");
    expect(exists).toBe(true);
  });

  test("should return false if the player does not exist", async () => {
    // Check if a non-existent player exists
    const exists = await PlayerRepository.existsByName("Jane Doe");
    expect(exists).toBe(false);
  });
});
