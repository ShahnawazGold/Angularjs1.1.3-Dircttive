








var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


 
 
  $scope.counter = 0;
      $scope.change = function() {
        $scope.counter++;
      };



});