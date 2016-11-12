











var app = angular.module('myApp',[]);

app.controller('myController',function($scope,$http){


 $scope.insertData=function(){

     $http.post("insert.php" ,{ 'name':$scope.name,'fname':$scope.fname})

    .success(function(){
        console.log("data has been inserted");

    })
 }

});