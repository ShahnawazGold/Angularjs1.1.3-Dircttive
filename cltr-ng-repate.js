

var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


// $scope.message="shah angular";

var employees =[
    {firstName:"bean",lastName:"shahnwz" ,gender: "male", salary:"6600"},
    {firstName:"bean",lastName:"shahnwz" ,gender: "male", salary:"6600"},
    {firstName:"bean",lastName:"shahnwz" ,gender: "male", salary:"6600"},
    {firstName:"bean",lastName:"shahnwz" ,gender: "male", salary:"6600"}
  
    
    ];

$scope.employees=employees;

});