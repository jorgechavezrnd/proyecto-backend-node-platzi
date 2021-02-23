module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'tpR35zVkcL',
        password: process.env.MYSQL_PASS || 'TlMUDD2N2G',
        database: process.env.MYSQL_DB || 'tpR35zVkcL',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'us1-delicate-teal-32106.upstash.io',
        port: process.env.REDIS_PORT || 32106,
        password: process.env.REDIS_PASS || '1663b932d2f4438a8019b518184a4e11'
    }
};
