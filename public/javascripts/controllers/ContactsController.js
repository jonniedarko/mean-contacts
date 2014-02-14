'use strict';

var app = angular.module('contactsApp');

app.controller('ContactsController', function ($scope, $http, $q){
	$scope.contacts = [];
	$scope.Test = "Hello"

	$scope.setContacts = function(contacts){
		if(contacts != null)
			$scope.contacts = contacts;
		else{
			$scope.contacts = [ 
		  		{ 	name  : "Jackie Thompson"
		  			,phone : "+353(086)932 6893"
		  			,email : "tom13@gmail.com" 		
		  		}
		  		,{ 	name  : "Bruce Wayne"
		  			,phone : "+353(087)362 9343"
		  			,email : "mary.x@gmail.com" 		
		  		}
		  		,{ 	name  : "Davey Jones"
		  			,phone : "+353(085)234 1457"
		  			,email : "tom13@gmail.com" 		
		  		}
		  	] ;
		  }
		}

	$scope.addNewContact = function () {
		console.log("adding new Contact");
		$scope.contacts[$scope.contacts+1] = $scope.newContact;
		$q.when($scope.contacts);
	}
});