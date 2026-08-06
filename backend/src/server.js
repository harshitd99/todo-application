require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();

        const server = app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

        const gracefulShutdown = async (signal) => {
            console.log(`\n${signal} received. Shutting down...`);

            await mongoose.connection.close();

            server.close(() => {
                console.log("✅ HTTP Server Closed");
                process.exit(0);
            });
        };

        process.on("SIGINT", () => gracefulShutdown("SIGINT"));
        process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

    } catch (error) {
        console.error("❌ Failed to start server");
        console.error(error.message);
        process.exit(1);
    }
};

startServer();