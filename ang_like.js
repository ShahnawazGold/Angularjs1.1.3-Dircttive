



var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


// $scope.message="shah angular";

var technologies =[
    {name:"angluar",likes:0 ,dislikes: 0},
    {name:"php",likes:0 ,dislikes: 0},
    {name:"c#",likes:0 ,dislikes: 0},
    {name:"opp",likes:0 ,dislikes: 0}
    
    ];

   $scope.technologies=technologies;

   $scope.incrementLikes= function(technology){
        technology.likes++;
   }

     $scope.incrementDislikes= function(technology){
        technology.dislikes++;
   }
});