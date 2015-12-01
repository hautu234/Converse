var app = angular.module('converseBMT', ['ngRoute'])

.controller('shoesController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
    $scope.$on('$includeContentLoaded', function(event) {
        angular.element('.pgwSlideshow').pgwSlideshow();
    });
}]);

