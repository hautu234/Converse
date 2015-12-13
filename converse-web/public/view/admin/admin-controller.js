var app = angular.module('admin', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider, $logProvider) {
        //configure the routing rules here
        $routeProvider.when('/admin', {
            controller: 'adminController',
            templateUrl: 'view/admin/admin.html'
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

    .controller('adminController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

        });
    }]);

