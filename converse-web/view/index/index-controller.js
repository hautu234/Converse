'use strict';

var app = angular.module('index', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        //configure the routing rules here
        $routeProvider.when('/index', {
            templateUrl: 'view/index.html',
            controller: 'indexController'
        });
    })

    .controller('indexController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {

    }]);