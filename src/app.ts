import express, { Request, Response } from "express";
import "./models/syncModels";

const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Galens Express Backend");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
