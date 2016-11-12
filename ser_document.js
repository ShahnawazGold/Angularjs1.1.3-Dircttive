







var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope,$document){


 $scope.title = $document[0].title;
  $scope.windowTitle = angular.element(window.document)[0].title;
 


});