/**
 * Created by william on 17/1/18.
 */
module.exports = ['$scope','authService','request','$state',
    function($scope, authService,request,$state) {

        $scope.user = {
            phone : "",
            password:""
        };

        //执行用户登录操作
        $scope.signin = function() {
            request.post('signin', $scope.user)
                .then(
                    function(data) {
                        authService.setToken(data.token, data.expire_in * 1000);
                        $state.go('home');
                    },
                    function(error) {
                        console.log(error);
                    }
                );
        };
    }];