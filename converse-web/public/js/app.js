'use strict';

// Declare app level module which depends on views, and components
angular.module('converseBMT', [
	'ngRoute',
	'listing',
	'shoes',
    'index',
    'home',
    'header',
    'admin',
    'login',
    'category'
]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
}]).directive('myAdSense', function() {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        template: '<div ng-transclude></div>',
        link: function ($scope, element, attrs) {
            if (!window.adsbygoogle) {
                window.adsbygoogle = [];
            }
            window.adsbygoogle.push({});
        }
    }
}).controller('mainController', ['$window','$rootScope','$location', function($window,$rootScope,$location) {
    if($window.sessionStorage.loggedUser) {
        $rootScope.loggedUser = $window.sessionStorage.loggedUser;
        console.log($location.path);

    }
}]);