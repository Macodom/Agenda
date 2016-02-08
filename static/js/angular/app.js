
/* App Module */

var variable = angular.module('appimagen', ['ngResource','ngRoute','ngWig','ngSanitize','ui.bootstrap',

    'appimagen.controllers',
    'appimagen.services',
]);

variable.config(function($interpolateProvider) {//codigo para cambiar la forma de mostrar en el template a // en lugar de {{}}
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});


variable.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';    }
]);

/**
variable.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/app-xv/', {
                templateUrl: '/templates/lista_imgenes_appmovil.html',
                controller: 'LisImagesControllerCliente',
                controller: 'LisImagesControllerChaperonP',
                controller: 'LisImagesControllerChaperonE',
            }).
            when('/add-horarios-form/:pk_prog/:pk/', {
                //templateUrl: 'templates/lista_imgenes_appmovil.html',
                controller: 'AddHorario'
            }).
            otherwise({
                redirectTo: '/app-xv/'
            });
    }]);
*/
