const Sequelize = require('sequelize');
const {creds} = require("../Config")

const sequelize = new Sequelize(creds.portal_database, creds.databse_user, creds.databse_password, {
    host: creds.database_host,
    dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;
db.models = {};
 

module.exports = {db};

