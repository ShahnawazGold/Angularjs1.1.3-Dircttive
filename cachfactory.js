







var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope,$cacheFactory){


 
 
 $scope.keys = [];
  $scope.cache = $cacheFactory('cacheId');
  $scope.put = function(key, value) {
    if (angular.isUndefined($scope.cache.get(key))) {
      $scope.keys.push(key);
    }
    $scope.cache.put(key, angular.isUndefined(value) ? null : value);
  };


});