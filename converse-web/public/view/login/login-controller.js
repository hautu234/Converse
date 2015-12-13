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

    .controller('loginController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

        });
    }]);

