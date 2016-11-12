








var myApp = angular.module('myModel',[]);

myApp.controller('myController',function($scope){


 
 
  expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
  element(by.model('master')).click();
  expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();



});