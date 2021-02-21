module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
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
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
};
