







var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope,$filter){


  $scope.originalText = 'hello';
  $scope.filteredText = $filter('uppercase')($scope.originalText);



});