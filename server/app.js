import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import contact from "./routes/contactRoute.js"
import ErrorMiddleware from "./middleware/errorMiddleware.js"
import cors from "cors"

dotenv.config({
    path: "./config/config.env"
})

const app = express();
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   })
// );
// app.options("*", cors());

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.use(ErrorMiddleware)

app.use("/api/v1", contact)

export default app;