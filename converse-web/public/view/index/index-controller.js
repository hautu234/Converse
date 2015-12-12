'use strict';

var app = angular.module('index', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        //configure the routing rules here
        $routeProvider.when('/index', {
            templateUrl: 'view/index/index.html',
            controller: 'indexController'
        });
    })

    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                $timeout(function(){
                    console.log($('.carousel-control'));
                    $('.carousel-control, .carousel-item').attr('disabled', true);
                    $('.carousel-control, .carousel-item').click(function(e) {
                        e.preventDefault();
                    });
                },0);
            }
        }
    })

    .controller('indexController', ['$timeout','$scope','$routeParams', '$location', '$http', function($timeout, $scope, $routeParams, $location, $http) {

    }])