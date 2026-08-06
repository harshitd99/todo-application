const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Todo API",
            version: "1.0.0",
            description: "REST API for Todo Application",
        },

        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Development Server",
            },
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },

        security: [
            {
                bearerAuth: [],
            },
        ],
    },

    apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsdoc(options);