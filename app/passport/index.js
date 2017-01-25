/**
 * Created by william on 17/1/19.
 */

angular = require('angular');
uirouter = require('uirouter');

service = require('../services');

//define the app.home module
module.exports = angular.module('app.passport', [uirouter, service.AuthService, service.Request])
    .config(require('./passport.routes'))
    .controller('SigninController', require('./signin.controller'))
    .controller('SignupController', require('./signup.controller'))
    .service('passportService', require('./passport.service'))
    .name;