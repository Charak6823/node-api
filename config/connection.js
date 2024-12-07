const {Sequelize} = require('sequelize');

const dbConnection = new Sequelize(
    'phone_shop_db',
    'root',
    'root_password',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = dbConnection;