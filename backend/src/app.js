const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const ratelimit = require("express-rate-limit");
const compression = require("compression");

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");


const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes");

// rtate limiter
const limiter = ratelimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

const app = express();

// middlewares
app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec)
);

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(helmet());

app.use(morgan("dev"));

app.use(limiter);

app.use(compression());

app.use(express.json());

// Routes
app.use("/api/v1", routes);

// Error handler must be LAST
app.use(errorHandler);

module.exports = app;