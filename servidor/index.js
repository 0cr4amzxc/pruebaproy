import express from "express";
import Cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import eventoRoutes from "./routes/evento.routes.js";

const app = express();

app.use(
  Cors({
    origin: "http://localhost:5173",
  })
);

app.listen(PORT);

app.use(express.json());

app.use(indexRoutes);
app.use(eventoRoutes);

console.log(`Server is running in port ${PORT}`);
