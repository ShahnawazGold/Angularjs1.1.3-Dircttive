







var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope,$log){


 
  $scope.$log = $log;
  $scope.message = 'Hello World!';



});