define([
    'angular',
    './config',
    './src/frontend/module.config',
    'angular-route',
    './src/frontend/module.require'
],function(angular,config,frontendModuleConfig){
   'use strict';

    var app = angular.module(config.name,[
        'ngRoute',
        frontendModuleConfig.name
    ]).run(function(){

    });

    return app;

});