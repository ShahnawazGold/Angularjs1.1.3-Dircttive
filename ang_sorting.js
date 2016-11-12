








var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


// $scope.message="shah angular";

var employees =[
    {name:"James",dateOfBirth: new Date("augst 20,1991") ,gender: "male", salary:"6600"},
    {name:"ZIA",dateOfBirth:new Date("october 20,1971") ,gender: "male", salary:"90000"},
    {name:"zeeshan",dateOfBirth:new Date("novmber 20,1991") ,gender: "male", salary:"20000"},
    {name:"Shah",dateOfBirth:new Date("augst 20,1991") ,gender: "male", salary:"35000"},
    {name:"David",dateOfBirth:new Date("Janvry 20,1991") ,gender: "male", salary:"70000"}
   
    ];

$scope.employees=employees;
//$scope.rowLimit=3;

$scope.sortCloum="name";
});