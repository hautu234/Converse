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
                    $('.carousel-control, .carousel-item').attr('disabled', true);
                    $('.carousel-control, .carousel-item').click(function(e) {
                        e.preventDefault();
                    });
                },0);
            }
        }
    })

    .controller('indexController', ['$timeout','$scope','$routeParams', '$location', '$http', function($timeout, $scope, $routeParams, $location, $http) {
        var section = $location.search().section || "category";
        $scope.section = section;

        var getAllUrl = '/api/' + section + '/get-all';
        var createUrl = '/api/' + section + '/create';
        var updateUrl = '/api/' + section + '/update';

        var fetchEntities = function(getAllUrl, entityName) {
            $http.get(getAllUrl).then(function(response) {
                var entities = response.data.MESSAGE;
                $scope.entities[entityName] = entities;
            });
        };

        $scope.entity = {};
        $scope.entities = {};

        fetchEntities(getAllUrl, section);
    }]);