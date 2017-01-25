/**
 * Created by william on 17/1/18.
 */
angular = require('angular');
angularCache = require('angular-cache');



module.exports = angular.module('Request', [angularCache])
    .service('request', request)
    .name;


request.$inject=['$http', '$q', 'ENV', 'authService'];

function request($http, $q, ENV, authService) {
    var confObj = {};

    var request = function() {
        var deferred = $q.defer();

        confObj.headers = {
            Authorization: 'Bearer ' + authService.getToken()
        };

        $http(confObj)
            .then(function(res) {
                deferred.resolve(res.data, res.status);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };



    this.get = function(url, params) {
        confObj = {
            method: 'GET',
            url: ENV.api + url,
            params: params
        };

        return request();
    };

    this.post = function(url, data) {
        confObj = {
            method: 'POST',
            url: ENV.api + url,
            data: data
        };
        return request();
    };

    this.put = function(url, data) {
        confObj = {
            method: 'PUT',
            url: ENV.api + url,
            data: data
        };
        return request();
    };

    this.delete = function(url) {
        confObj = {
            method: 'DELETE',
            url: ENV.api + url
        };
        return request();
    }
};
