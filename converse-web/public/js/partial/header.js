'use strict';

var app = angular.module('header', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    //configure the routing rules here
    $routeProvider.when('partial/header.html', {
        templateUrl: 'partial/header.html',
        controller: 'headerController'
    });
})

.controller('headerController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
    angular.element(document).ready(function () {
        $(".dropdown-toggle").click(function(e) {
            event.preventDefault();
        });
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
                $(this).toggleClass('open');
            }
        );
    });
}]);