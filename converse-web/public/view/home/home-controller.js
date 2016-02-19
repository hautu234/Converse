'use strict';

var app = angular.module('home', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        //configure the routing rules here
        $routeProvider.when('/home', {
            templateUrl: 'view/home/home.html',
            controller: 'homeController'
        });
    })


    .controller('homeController', ['$scope','$routeParams', '$location', '$http','$rootScope', function($scope, $routeParams, $location, $http, $rootScope) {
        $rootScope.css = "home.css";
    }]);

