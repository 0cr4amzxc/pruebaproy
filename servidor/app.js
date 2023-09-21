import express from "express";
import morgan from "morgan";
import Cors from "cors";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(
    Cors({
      origin: "http://localhost:5173",
    })
  );

//app.use(cookieparser());  


export default app;