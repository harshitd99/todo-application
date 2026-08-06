const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", routes);

// Error handler must be LAST
app.use(errorHandler);

module.exports = app;