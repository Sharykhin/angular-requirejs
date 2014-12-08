define([
    '../module',
    '../module.config'
],function(module,moduleConfig){
   'use strict';

   var name = 'headerDirective';
   var dependencies = [];

   var directive = function() {
       return  {
           restrict: 'E',
           templateUrl: 'src/common/directives/templates/' + name +'/header.html',
           controller: function($scope) {

           }
       }
   };

    module.directive(name, dependencies.concat(directive));
});