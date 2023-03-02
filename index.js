import path from 'path'
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import * as url from 'url';
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/booking.js";

const app = express();

//app.enable('trust proxy');

const corsOptions = {
  origin: true,
  credentials: true,
};

//middlewares

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/tours", tourRoute);
app.use("/api/users", userRoute);
app.use("/api/review", reviewRoute);
app.use("/api/booking", bookingRoute);

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

export default app;
