// utils/errorHandler.ts
import { Response } from "express";

export function handleError(res: Response, error: unknown): void {
  if (error instanceof Error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(500).json({ error: "Unknown error occurred" });
  }
}
