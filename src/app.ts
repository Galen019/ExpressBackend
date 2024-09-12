import express, { Request, Response } from "express";
import cors from "cors";
import playerRoutes from "./routes/playerRoutes";
import "./models/syncModels";

const app = express();
const port = 3001;

// Middleware
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Register routes
app.use("/", playerRoutes);

app.get("/", (_: Request, res: Response) => {
  res.send("Galens Express Backend");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
