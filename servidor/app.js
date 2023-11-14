import express from "express";
import morgan from "morgan";
import Cors from "cors";

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(
    Cors({
      origin: "https://stirring-melba-c56661.netlify.app",
    })
  );

//app.use(cookieparser());  


export default app;