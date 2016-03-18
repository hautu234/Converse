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
        'administration',
        'contact',
        'ezfb'
])

.config(['$routeProvider', '$locationProvider','ezfbProvider', function ($routeProvider, $locationProvider, ezfbProvider) {
    ezfbProvider.setInitParams({
        appId: '932685206783368',
        version: 'v2.3'
    });

    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
}])

.directive('myAdSense', function () {
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
})

.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})

.controller('mainController', ['$window', '$scope', '$rootScope', '$location', function ($window, $scope, $rootScope, $location) {
    if ($window.sessionStorage.loggedUser) {
        $rootScope.loggedUser = $window.sessionStorage.loggedUser;
        console.log($location.path);

    }

    $rootScope.css = "";
}]);

