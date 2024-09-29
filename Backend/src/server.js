// src/server.js
const http = require('http');
const app = require('./app');
const config = require('./config');
const logger = require('./utils/logger');

const server = http.createServer(app);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    logger.error(`Unhandled Rejection: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});

server.listen(config.port, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${config.port}`);
});
