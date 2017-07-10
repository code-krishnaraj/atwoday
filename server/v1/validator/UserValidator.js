'use strict';

/**
 * Class for adding validator functions using in Project entity 
*/
const Q = require('q');

class UserValidator {

  /**
   * Method to validate project name given
   */

   validateLogin(projectName) {
      let deffered = Q.defer();
      if(projectName == '' || typeof projectName === 'undefined') {
        deffered.reject(false);
      } else {
        deffered.resolve(true);
      }
      return deffered.promise;
   } 
 
}
module.exports = UserValidator;
