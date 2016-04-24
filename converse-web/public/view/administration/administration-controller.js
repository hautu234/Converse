"use strict";

var app = angular.module('administration', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider, $logProvider) {
        //configure the routing rules here
        $routeProvider.when('/administration', {
            controller: 'administrationController',
            templateUrl: 'view/administration/administration.html'
        });

        $logProvider.debugEnabled(true);
    })

    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
    })

    .controller('administrationController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
        var section = $location.search().section || "category";

        $scope.section = section;

        var getAllUrl = '/api/' + section + '/get-all';
        var createUrl = '/api/' + section + '/create';
        var updateUrl = '/api/' + section + '/update';

        var fetchEntities = function(getAllUrl, entityName, cb) {
            $http.get(getAllUrl).then(function(response) {
                var entities = response.data.MESSAGE;
                $scope.entities[entityName] = entities;
                cb(entities);
            });
        };

        $scope.entity = {};
        $scope.parentEntities = {};
        $scope.entities = {};
        $scope.result = {};
        $scope.inputdata = {
            submitButtonName : "Create"
        };

        $scope.change = function() {
            $scope.result.successMessage = "";
            $scope.result.errorMessage = "";
        };

        $scope.edit = function($event, entity) {
            $scope.entity = entity;
            $scope.inputdata.submitButtonName = "Update";
        };

        $scope.reset = function() {
            $scope.result.successMessage = "";
            $scope.result.errorMessage = "";
            $scope.entity = {};
            $scope.inputdata.submitButtonName = "Create";
        };

        $scope.delete = function() {
            var message = section + " has been deleted successfully!";
            var data = {_id: $scope.entity._id};
            $http.post(deleteUrl, data).then(
                function(response) {
                    var result = response.data.RESULT;
                    console.log(response.data);
                    if(result === "success!") {
                        $scope.result.successMessage = message;
                        $scope.entity = {};
                        fetchEntities(getAllUrl, section);
                    } else {
                        $scope.result.errorMessage = response.data.message;
                    }
                },
                function(response) {
                    console.log("Failed: " + response.data);
                }
            );
        };

        $scope.submit = function() {
            // default url is for creating category
            var message = section + " has been created successfully!";
            var url = createUrl;
            // init parameter
            var data = $scope.entity;

            // update case
            if(data._id) {
                url = updateUrl;
                message = section + " has been updated successfully!";
            }

            $http.post(url, data).then(
                function(response) {
                    var result = response.data.RESULT;
                    if(result === "success!") {
                        $scope.result.successMessage = message;
                        $scope.entity = response.data.MESSAGE;
                        $scope.inputdata.submitButtonName = "Update";
                        fetchEntities(getAllUrl, section);
                    } else {
                        $scope.result.errorMessage = response.data.message;
                    }
                },
                function(response) {
                    console.log("Failed: " + response.data);
                }
            );
        };

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

        });

        $scope.addCarouselImage = function() {

        };

        fetchEntities(getAllUrl, section);

        if(section === 'subcategory') {
            var parentSection = 'category';
            var parentAllUrl = '/api/' + parentSection + '/get-all';
            var initParentEntity = function(entities) {
                for(var i = 0; i < entities.length; i++) {
                    var entity = entities[i];
                    $scope.parentEntities[entity._id] = entity;
                }
            };

            fetchEntities(parentAllUrl, parentSection, initParentEntity);
        }


    }]);

