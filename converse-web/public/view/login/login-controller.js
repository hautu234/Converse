var app = angular.module('login', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider, $logProvider) {
        //configure the routing rules here
        $routeProvider.when('/onboarding', {
            controller: 'loginController',
            templateUrl: 'view/login/onboarding.html',
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

    .controller('loginController', ['$window','$rootScope','$scope','$routeParams', '$location', '$http', function($window,$rootScope, $scope, $routeParams, $location, $http) {
        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

        });

        $scope.change = function() {
            $scope.result.errorMessage = "";
        };

        var url = "/api";
        var action = $location.search().action;
        if(!action || action === "login") {
            $scope.isRegistering = false;
            url = url + "/auth"
        } else {
            $scope.isRegistering = true;
            url = url + "/register";
        }

        $scope.credential = {};
        $scope.result = {};

        $scope.submit = function() {

            if ($scope.credential.username && $scope.credential.password) {
                var data = {
                    'username':$scope.credential.username,
                    'email':$scope.credential.email,
                    'password':$scope.credential.password
                };

                console.log("calling " + url + " with " + data);
                $http.post(url, data).then(
                    function(response) {
                        var result = response.data.result;
                        if(result === "success!") {
                            $rootScope.loggedUser = $scope.credential.username;
                            $window.sessionStorage.loggedUser = $scope.credential.username;
                            $location.path( "/index" );
                        } else {
                            $scope.result.errorMessage = response.data.message;
                        }
                    },
                    function(response) {
                        console.log("Failed: " + response.data);
                    }
                );
            }
        };
    }]);

