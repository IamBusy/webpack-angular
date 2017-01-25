module.exports = function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./home.html'),
            controller: 'HomeController'
        });
}