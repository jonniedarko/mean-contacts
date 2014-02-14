var app = angular.module('contactsApp', []);

var food = angular.module('foodApp', ['nvd3ChartDirectives']);

app.controller('ContactsController', function ($scope){
	$scope.meals = [];

});