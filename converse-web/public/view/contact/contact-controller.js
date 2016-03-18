'use strict';

var app = angular.module('contact', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        //configure the routing rules here
        $routeProvider.when('/contact', {
            templateUrl: 'view/contact/contact.html',
            controller: 'contactController'
        });
    })
    .controller('contactController', ['$timeout','$scope','$routeParams', '$location', '$http', function($timeout, $scope, $routeParams, $location, $http) {

    }])