module.exports.providerConfig = ['$httpProvider', 'CacheFactoryProvider',
    function($httpProvider, CacheFactoryProvider) {

        var param = function(obj) {
            var query = '',
                name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };

        $httpProvider.defaults.transformRequest = function(obj) {
            return angular.isObject(obj) && String(obj) !== '[object File]' ? param(obj) : obj;
        };
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        $httpProvider.defaults.headers.put = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        angular.extend(CacheFactoryProvider.defaults, {
            maxAge: 15 * 60 * 1000,

        });
    }
];

module.exports.routing = ['$urlRouterProvider', '$locationProvider',
    function($urlRouterProvider, $locationProvider) {


        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/signin');
    }
];
