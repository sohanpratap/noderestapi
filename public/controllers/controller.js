var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	
	console.log('hello this is the test');
	$http.get('/contactlist').success(function (response){
		console.log('I got data I requested');
		$scope.contactlist = response;
		});
		//$scope.contactlist = contact;
	}]);
