






var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


     $scope.user1 = {};
    $scope.user2 = {};
    $scope.compare = function() {
    $scope.result = angular.equals($scope.user1, $scope.user2);
  };



});