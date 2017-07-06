'use strict';

const UserDao = require('../dao/UserDao');
const userDaoObj = new UserDao();

class AuthController {
  
  login(request, response) {
    userDaoObj.login(request, response);
	}

}
module.exports = AuthController;
