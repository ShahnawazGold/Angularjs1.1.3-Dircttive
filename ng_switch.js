








var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


 
$scope.items = ['settings', 'home', 'options', 'other'];
  $scope.selection = $scope.items[0];




});