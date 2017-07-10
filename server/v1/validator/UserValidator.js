'use strict';

/**
 * Class for adding validator functions in User entity 
*/
const Q = require('q');
const messageManager = require('../../../utils/configManager');

const messageCfg = messageManager.getConfig('constants');

class UserValidator {

  /**
   * Method to validate Login Action
   */

   validateLogin(request) {
      let deffered = Q.defer();
      let validError = {}, valid = true;

      request.checkBody('user_name', messageCfg.VALIDATION_MESSAGES.USER.LOGIN.USER_NAME).notEmpty();
      request.checkBody('password', messageCfg.VALIDATION_MESSAGES.USER.LOGIN.PASSWORD).notEmpty();

      request.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
          validError.errors = result.array();
          deffered.reject(validError);
        } else {
          deffered.resolve(true);
        }
      });
      return deffered.promise;
   } 
}
module.exports = UserValidator;
