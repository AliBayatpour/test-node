const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.status || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

app.listen(process.env.PORT || 5000);
