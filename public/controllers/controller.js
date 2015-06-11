	var myApp = angular.module('myApp',[]);
	myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	
	console.log('hello this is the test');
	
	var refresh = function(){   // To get data data immidiately on add
	$http.get('/contactlist').success(function (response){
		console.log('I got data I requested');
		$scope.contactlist = response;
		$scope.contact = '';
		});
	}; 
		refresh(); 	// To get data on page load
		
	$scope.addContact = function(){  // Add contact
		console.log($scope.contact);
	 $http.post('/contactlist',$scope.contact).success(function (response){
	 	console.log(response);
	 		refresh();
	 });	
     
	};	

	$scope.remove = function(id){  // Add contact
		console.log(id);
		$http.delete("/contactlist/"+id).success(function (response){
			console.log(response);
			refresh();

		});
	};	

	$scope.edit = function(id){

		$http.get('/contactlist/'+id).success(function (response){

			$scope.contact =response;	
		});
	};

	$scope.update = function(){

		var id = $scope.contact._id;
		$http.put('/contactlist/'+id,$scope.contact).success(function (response){

			console.log(response);
			refresh();
		});

	};

	$scope.deselect = function (){

		$scope.contact = '';
	};




	}]);
