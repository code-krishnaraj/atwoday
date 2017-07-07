'use strict';

const UserController = require('./v1/controllers/UserController');
const userCtrlObj = new UserController();

class Router {

  routesCommon(expressApp, routes) {
    
    let commonRoutes = routes.Router();
        
    commonRoutes.post('/login', function(request, response) {
      userCtrlObj.login(request, response);
    });
    expressApp.use('/api/v1', commonRoutes);
    
  }

}
module.exports = Router;
