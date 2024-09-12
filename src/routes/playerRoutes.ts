// routes/playerRoutes.ts
import express from "express";
import PlayerRepository from "repositories/playerRepository";
import { handleError } from "./errorHandler";

const router = express.Router();

router.get("/players", async (_, res) => {
  try {
    const players = await PlayerRepository.getAllPlayers();
    res.json(players);
  } catch (error) {
    handleError(res, error);
  }
});

router.post("/players", async (req, res) => {
  try {
    const player = await PlayerRepository.createPlayer(req.body.name, false);
    res.status(201).json(player);
  } catch (error) {
    handleError(res, error);
  }
});

export default router;
