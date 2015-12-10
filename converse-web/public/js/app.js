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
        templateUrl: 'partial/googleads.html',
        controller: function(){
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    };
});;