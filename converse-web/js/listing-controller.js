'use strict';

var app = angular.module('listing', ['ngRoute'])

    .config(function ($routeProvider, $locationProvider) {
        //configure the routing rules here
        $routeProvider.when('/listing', {
            templateUrl: 'view/listing/listing.html',
            controller: 'listingController'
        });

    })


    .controller('listingController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
        var shoes = [

        ];

        var brand = $location.search().brand;
        if(brand) {
            $http.get('/data/' + brand + '.json').then(function(response) {
                shoes = response.data.items;
                $scope.type = response.data.type;

                var displayShoes = [];
                var temp = [];
                for(var i = 0; i < shoes.length; i++) {
                    temp.push(shoes[i]);
                    if(temp.length == 4 || i  == shoes.length - 1 ) {
                        displayShoes.push(temp);
                        var temp = [];
                    }
                }

                $scope.displayShoes = displayShoes;
            });
        }
    }]);

