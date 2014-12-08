define([
    '../module',
    '../module.config'
],function(module,moduleConfig){
   'use strict';

    var name = moduleConfig.name + '.AuthController';

    var dependencies = ['$scope','$cookieStore','$http'];

    var controller = function($scope,$cookieStore,$http,authUrl,userUrl) {
        var uid = $cookieStore.get('uid');
        if(uid !== undefined) {
            $http.get(userUrl+uid,{withCredentials : true}).success(function(data){

            });
        }
        $cookieStore.remove('token');
        console.log(token);
        $scope.legend = 'Login form';

    };

    module
        .constant('authUrl','http://localhost:2403/users/login')
        .constant('userUrl','http://localhost:2403/users/')
        .controller(name,dependencies.concat(controller));

});