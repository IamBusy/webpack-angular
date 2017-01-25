/**
 * Created by william on 17/1/19.
 */
module.exports = ['$stateProvider',
function($stateProvider) {
    $stateProvider
        .state('signup', {
            url: '/signup',
            name: 'signup',
            template: require('./signup.html'),
            controller: 'SignupController'
        })
        .state('signin', {
            url: '/signin',
            name: 'signin',
            template: require('./signin.html'),
            controller: 'SigninController'
        });
}];