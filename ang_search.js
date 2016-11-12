










var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


// $scope.message="shah angular";

var employees =[
    {name:"James", gender: "male",salary:"6600", city:"kony"},
    {name:"Zia", gender: "male",salary:"6600", city:"karachi"},
    {name:"David", gender: "male",salary:"6600", city:"france"},
    {name:"shah", gender: "male",salary:"6600", city:"dubai"},
    {name:"tom", gender: "male",salary:"6600", city:"newyork"}
    
   
    ];

$scope.employees=employees;
//$scope.rowLimit=3;

//$scope.sortCloum="name";
});