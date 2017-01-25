/**
 * Created by william on 17/1/18.
 */
angular = require('angular');
angularCache = require('angular-cache');

module.exports = angular.module('Auth', [angularCache])
    .service('authService', auth)
    .name;

auth.$inject = ["CacheFactory"];

function auth(CacheFactory) {

    var userCache = CacheFactory.get('userCache');

    var token = "new-user-authentication-token-key";
    var expired_in = 0;
    var cacheKey = 'authentication';

    //检测用户是否已经登录
    this.isLoggedIn = function() {
        return this.getToken() != null;
    };

    this.setToken = function(t, exp) {
        if (!userCache) {
            userCache = CacheFactory('userCache', {
                storageMode: 'localStorage'
            });
        }

        userCache.put(cacheKey, {
            token: t,
            expired_in: exp
        });
        token = t;
        expired_in = exp;
        return true;
    };

    this.getToken = function() {
        try {
            var now = (new Date()).valueOf();

            //this is the first time to access this service,
            // try to retire the token from cache
            if (expired_in == 0) {
                var obj = userCache.get(cacheKey);
                if (obj && obj.expired_in > now) {
                    token = obj.token;
                    expired_in = obj.expired_in;
                    return token;
                }
            } else {
                if (expired_in > now) {
                    return token;
                }
            }
            return null;
        } catch (e) {
            return null
        }
    };

    this.destroy = function () {
        userCache.destroyAll();
    }

}
