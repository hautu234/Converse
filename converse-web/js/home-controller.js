'use strict';

var app = angular.module('home', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        //configure the routing rules here
        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        });
    })


    .controller('homeController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {

    }]);

