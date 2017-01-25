/**
 * Created by william on 17/1/18.
 */

angular = require('angular');
uirouter = require('uirouter');
ionic    = require('ionic');

ngCache = require('angular-cache');

config = require('./app.config');

home = require('./home');

passport = require('./passport');



angular.module('app', ['ionic',uirouter, ngCache,home,passport])
    .config(config.routing)
    .config(config.providerConfig)
    .constant('ENV', require('./app.env'));