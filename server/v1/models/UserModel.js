const Sequelize = require('sequelize');
const configManager = require('../../../utils/configManager');
const appCfg = configManager.getConfig('app');

const sequelize = new Sequelize(appCfg.db.database, appCfg.db.user, appCfg.db.password);

const User = sequelize.define('user', {
	id: {type: Sequelize.INTEGER, primaryKey : true},
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	role: Sequelize.BOOLEAN,
	country: Sequelize.CHAR,
	image: Sequelize.STRING,
});

module.exports = User;