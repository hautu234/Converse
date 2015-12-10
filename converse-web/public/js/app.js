'use strict';

// Declare app level module which depends on views, and components
angular.module('converseBMT', [
	'ngRoute',
	'listing',
	'shoes',
    'index',
    'home'
]).config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]).directive('myAdSense', function() {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        template: '<div ng-transclude></div>',
        link: function ($scope, element, attrs) {}
    }
});