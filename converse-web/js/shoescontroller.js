var app = angular.module('converseBMT', ['ngRoute']);
app.controller('shoesController', ['$scope','$routeParams', function($scope,$routeParams) {
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

    $scope.$on('$routeChangeSuccess', function() {
        // $routeParams will be populated here if
        // this controller is used outside ng-view
        console.log(JSON.stringify($routeParams));


    });

    console.log("params" + $routeParams.test);
    console.log(JSON.stringify($routeParams));
    $scope.displayShoes = displayShoes;
}]);