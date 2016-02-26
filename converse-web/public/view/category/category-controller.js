"use strict";

var app = angular.module('category', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider, $logProvider) {
        //configure the routing rules here
        $routeProvider.when('/category', {
            controller: 'categoryController',
            templateUrl: 'view/category/category.html'
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

    .controller('categoryController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
        var fetchCategories = function() {
            $http.get('/api/category/get-all').then(function(response) {
                var categories = response.data.MESSAGE;
                $scope.categories = categories;
            });
        };

        $scope.category = {};
        $scope.categories = {};
        $scope.result = {};
        $scope.inputdata = {
            submitButtonName : "Create"
        };

        $scope.change = function() {
            $scope.result.successMessage = "";
            $scope.result.errorMessage = "";
        };

        $scope.edit = function($event, category) {
            $scope.category = category;
            $scope.inputdata.submitButtonName = "Update";
        };

        $scope.reset = function() {
            $scope.result.successMessage = "";
            $scope.result.errorMessage = "";
            $scope.category = {};
            $scope.inputdata.submitButtonName = "Create";
        };

        $scope.delete = function() {
            var url = "/api/category/delete";
            var message = "category has been deleted successfully!";
            var data = {_id: $scope.category._id};
            $http.post(url, data).then(
                function(response) {
                    var result = response.data.RESULT;
                    console.log(response.data);
                    if(result === "success!") {
                        $scope.result.successMessage = message;
                        $scope.category = {};
                        fetchCategories();
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
            var url = "/api/category/create";
            var message = "category has been created successfully!";

            // init parameter
            var data = {
                _id: $scope.category._id,
                name: $scope.category.name,
                type: $scope.category.type,
                description: $scope.category.description,

                imageUri: $scope.category.imageUri,
                mainCategory: $scope.category.mainCategory,
                meta: {
                    averageRating: $scope.category.rating,
                    numberReviews: $scope.category.review,
                }
            };

            // update case
            if(data._id) {
                url = "/api/category/update";
                message = "category has been updated successfully!";
            }

            console.log("calling " + url + " with " + data);
            $http.post(url, data).then(
                function(response) {
                    var result = response.data.RESULT;
                    console.log(response.data);
                    if(result === "success!") {
                        $scope.result.successMessage = message;
                        $scope.category = response.data.MESSAGE;
                        $scope.inputdata.submitButtonName = "Update";
                        fetchCategories();
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

        fetchCategories();


    }]);

