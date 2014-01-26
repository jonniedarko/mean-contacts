'use strict';

var app = angular.module('contactsApp');

app.controller('ContactsController', function ($scope, $http, $q){
	$scope.contacts = [];
	$scope.Test = "Hello"

	$scope.setContacts = function(contacts){
		$scope.contacts = contacts;

	};

	$scope.addNewContact = function () {
		console.log("adding new Contact");
		$scope.contacts[$scope.contacts+1] = $scope.newContact;
		$q.when($scope.contacts);
	}
});