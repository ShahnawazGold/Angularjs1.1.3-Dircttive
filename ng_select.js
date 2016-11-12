








var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){

$scope.data = {
    singleSelect: null,
    multipleSelect: [],
    option1: 'option-1'
   };

   $scope.forceUnknownOption = function() {
     $scope.data.singleSelect = 'nonsense';
   };

    $scope.data = {
    model: null,
    availableOptions: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ]
   };

//    m nesc

 $scope.data = {
    model: null,
    availableOptions: [
         {value: 'myString', name: 'string'},
         {value: 1, name: 'integer'},
         {value: true, name: 'boolean'},
         {value: null, name: 'null'},
         {value: {prop: 'value'}, name: 'object'},
         {value: ['a'], name: 'array'}
    ]
   };

   ////// nexr

    $scope.data = {
    availableOptions: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ],
    selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
    };


});