define([
    '../module',
    '../module.config'
],function(module,moduleConfig){
   'use strict';

    var name = moduleConfig.name + '.HomeController';
    var dependencies = ['$scope'];
    var controller = function($scope) {

        $scope.header = 'Events';
    };

    module.controller(name,dependencies.concat(controller));

});