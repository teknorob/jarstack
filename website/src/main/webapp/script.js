// script.js

    // create the module and name it scotchApp
	// also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    scotchApp.controller('rootController', function($scope) {

        // create a message to display in our view
        $scope.message = 'This is the Root Controller';
    });

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/root.html',
                controller  : 'rootController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
    
    
    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'This is the About controller';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'This is the Contact Controller';
    });
    
    scotchApp.controller('indexController', function($scope) {
        $scope.message = 'This is the Index Controller';
    });