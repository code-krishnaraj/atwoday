'use strict';

const AuthController = require('./v1/controllers/AuthController');
const authCtrlObj = new AuthController();

class Router {

  /*applyCommon(expressApp, routes, passport) {
    
    // ROUTES FOR OUR API
   let router = routes.Router();

    // on routes that end in /project
    // ----------------------------------------------------
    router.all('/project/*', function (request, response, next) {
      authenticateObj.handle(request, response, next);
    });

    router.all('/credential/*', function (request, response, next) {
      authenticateObj.handle(request, response, next);
    });

    router.route('/project')
      .get(function(request, response) {
        projectCtrlObj.index(request, response);
      })
      .post(function(request, response) {
        projectCtrlObj.store(request, response);
    });

    router.route('/project/:id')
      .get(function(request, response) {
        projectCtrlObj.show(request, response);
      })
      .put(function(request, response) {
        projectCtrlObj.update(request, response);
      })
      .delete(function(request, response) {
        projectCtrlObj.delete(request, response);
    });

    // on routes that end in /credential
    // ----------------------------------------------------
    router.route('/credential')
      .post(function(request, response) {
        credentialCtrlObj.store(request, response);
    });

    router.route('/credential/:id')
      .get(function(request, response) {
        credentialCtrlObj.show(request, response);
      })
      .put(function(request, response) {
        credentialCtrlObj.update(request, response);
      })
      .delete(function(request, response) {
        credentialCtrlObj.delete(request, response);
    });  

    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api

    expressApp.use('/api/v1', router);
	}*/

  applyAuth(expressApp, routes, passport) {
    
    let authRouter = routes.Router();
        
    authRouter.post('/login', function(request, response) {
      authCtrlObj.login(request, response);
    });
    expressApp.use('/api/v1', authRouter);
    
  }

}
module.exports = Router;
