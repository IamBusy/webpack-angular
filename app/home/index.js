angular = require('angular');
uirouter = require('angular-ui-router');

routing = require('./home.routes');
HomeController = require('./home.controller');

service = require('../services');


//define the app.home module
module.exports = angular.module('app.home', ['ionic', uirouter, service.Request])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;