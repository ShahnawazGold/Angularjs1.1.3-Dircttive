









var app = angular.module('myApp',[]);

app.controller('myController',function($scope,$http){


 $scope.insertData=function(){

     $http.post("insert2.php" ,{ 'name':$scope.name,'fname':$scope.fname})

    .success(function(){
        console.log("data has been inserted");

      $scope.displaystud();
    })
 } /// closs here insert data


 $scope.displaystud=function(){

      $http.get("select.php")
    .success(function(data){
        console.log("data has been get");
        $scope.data=data;
     
    })
 }

});