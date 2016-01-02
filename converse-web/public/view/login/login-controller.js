var app = angular.module('login', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider, $logProvider) {
        //configure the routing rules here
        $routeProvider.when('/login', {
            controller: 'loginController',
            templateUrl: 'view/login/login.html'
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

        $scope.credential = {};

        $scope.submit = function() {
            if ($scope.credential.username && $scope.credential.password) {
                var data = {'username':$scope.credential.username, 'password':$scope.credential.password};
                $http.post('/api/auth', data).then(
                    function(response) {
                        $rootScope.loggedUser = $scope.credential.username;
                        $window.sessionStorage.loggedUser = $scope.credential.username;
                        $location.path( "/index" );
                    },
                    function(response) {
                        console.log("failed");
                    }
                );
            }
        };
    }]);

