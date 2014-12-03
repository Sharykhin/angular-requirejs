require.config({
    baseUrl:'/',
    paths: {
        'domReady' : 'vendors/requirejs-domready/domReady',
        'angular' : 'vendors/angular/angular',
        'angular-route' : 'vendors/angular-route/angular-route'
    },
    shim : {
        'angular' : {
            exports: 'angular'
        },
        'angular-route': {
            'deps':['angular']
        }
    }
});

require([
    'angular',
    'config',
    'app',
    'routers'
], function( angular,config){
    angular.element(document).ready(function(){
        angular.bootstrap(document,[config.name]);
    });
})

