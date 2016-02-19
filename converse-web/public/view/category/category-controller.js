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
        var shoesId = $location.search().shoesId;
        var brand = $location.search().brand;

        if(brand && shoesId) {
            $http.get('/data/' + brand + '.json').then(function(response) {
                shoes = response.data.items;
                $scope.type = response.data.type;

                for(i = 0; i < shoes.length; i++) {
                    if(shoes[i] && shoes[i].id === shoesId && shoes[i].carouselImages)
                    {
                        $scope.carouselImages = shoes[i].carouselImages;
                        break;
                    }
                }
            });
        }

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

        });
    }]);

