var app = angular.module('converseBMT', ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {
    //configure the routing rules here
    $routeProvider.when('/shoesdetailed.html/view', {
        controller: 'shoesController'
    });

    //routing DOESN'T work without html5Mode
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})


.controller('shoesController', ['$scope','$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {
    var shoes = [
        {
            "name": "Nike Air Max",
            "price": 350000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm6.staticflickr.com/5808/23174288811_33f6fc9782_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        },
        {
            "name": "Nike Air Max",
            "price": 350000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm6.staticflickr.com/5808/23174288811_33f6fc9782_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        },
        {
            "name": "Nike Air Max",
            "price": 350000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm6.staticflickr.com/5808/23174288811_33f6fc9782_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        },
        {
            "name": "Nike Air Max",
            "price": 350000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm6.staticflickr.com/5808/23174288811_33f6fc9782_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        },
        {
            "name": "Nike Air Max",
            "price": 350000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm6.staticflickr.com/5808/23174288811_33f6fc9782_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        },
        {
            "name": "Nike Air Max",
            "price": 350000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm6.staticflickr.com/5808/23174288811_33f6fc9782_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        },
        {
            "name": "Nike Air Test",
            "price": 120000,
            "color": "Hồng",
            "material": "Vải (Poly)",
            "imageUrl":"https://farm1.staticflickr.com/714/22744219537_87d3a514b0_o.jpg"
        }
    ];

    var displayShoes = [];
    var temp = [];
    for(i = 0; i < shoes.length; i++) {
        if(i % 4 == 0 || i  == shoes.length - 1 ) {
            displayShoes.push(temp);
            var temp = [];
        }
        temp.push(shoes[i]);
    }

    console.log("params" + JSON.stringify($location.search().test));

    $http.get('/data/nike.json').then(function(response) {
        console.log(response);
        $scope.shoesdata = response;
    });

    console.log("huy" + $scope.shoesdata);

    $scope.displayShoes = displayShoes;
}]);

