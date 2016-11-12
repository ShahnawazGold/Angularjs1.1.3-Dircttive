





var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


 
 
  $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };




});