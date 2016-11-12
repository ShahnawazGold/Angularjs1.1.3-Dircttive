









var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope,$http){

// $http({
//     method :'GET',
//     url  :'emply.html/srbnmbm'
// }).then(function(response){
//      $scope.employees= response.data;
// });


//================////////main////
// $http.get("welcome.html")

// .then(function(response){
//     /// true
//   $scope.content = response.data;// helo angular
//       $scope.statuscode = response.status; // 20
//       $scope.statustext = response.statusText;
//  //$scope.employees= response.data;

// },function(reason){
//     // false
//   $scope.error = reason.data;
// });
  $http.get("welcome.htm")
  .then(function(response) {

      $scope.content = response.data;// helo angular
      $scope.statuscode = response.status; // 20
      $scope.statustext = response.statusText;   // text here          
  });

});