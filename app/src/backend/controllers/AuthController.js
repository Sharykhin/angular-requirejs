define([
    '../module',
    '../module.config'
],function(module,moduleConfig){
   'use strict';

    var name = moduleConfig.name + '.AuthController';

    var dependencies = ['$scope','$cookieStore','$http','authUrl','userUrl'];

    var controller = function($scope,$cookieStore,$http,authUrl,userUrl) {
        var uid = $cookieStore.get('uid');

        $scope.error=null;


        if(uid !== undefined) {
            $http.get(userUrl+uid,{withCredentials : true}).success(function(response){
                if(response.id == uid) {
                    console.log('redirect me');
                }
            });
        };

        $scope.authenticate = function() {
            $scope.error=null;
            $http.post(authUrl,{username:$scope.username,password:$scope.password})
                .success(function(response){
                    $cookieStore.put('uid',response.uid);
                })
                .error(function(response){
                    var status = response.status;
                    if(status == 401) {
                        $scope.error = 'Bad credentials';
                    }
                });
        };

        $scope.legend = 'Login form';

    };

    module
        .constant('authUrl','http://localhost:2403/users/login')
        .constant('userUrl','http://localhost:2403/users/')
        .controller(name,dependencies.concat(controller));

});