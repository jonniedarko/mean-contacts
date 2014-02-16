var app = angular.module('foodApp');

app.controller('FoodController', function ($scope){


$scope.exampleData = [ ];
	$scope.totalKcals = 0;
	$scope.totalProtein =0;
	$scope.totalCarbs =0;
	$scope.totalFats =0;
	$scope.meals = null;
	$scope.test = 10;
	$scope.$watch('meals', function (newVal, oldVal){

			 	var kcals = 0,
		  		fats = 0,
		  		protein = 0,
		  		carbs = 0;
		  	for( i in $scope.meals){

		  		kcals+=parseFloat($scope.meals[i].kcal);
		  		fats+= parseFloat($scope.meals[i].nutrition.fats);
		  		protein+=parseFloat($scope.meals[i].nutrition.protein);
		  		carbs+=parseFloat($scope.meals[i].nutrition.carbs);
		  		console.log("$scope.meals["+i+"].nutrition.protein : "+$scope.meals[i].nutrition.protein);

		  	}
		  	console.log("protein :"+protein);


		  	$scope.totalKcals = kcals;
		  	$scope.totalProtein = protein;
			$scope.totalCarbs = carbs;
			$scope.totalFats =fats;
			$scope.exampleData = [ 
				{ key: "Protein", y: $scope.totalProtein },
	         	{ key: "Carbs", y: $scope.totalCarbs },
	         	{ key: "Fats", y: $scope.totalFats }
	         ];
		
		}, true);
	$scope.setMeals = function(meals){
		if(meals != null || meals != undefined)
			$scope.meals = meals;
		else{
			$scope.meals = [ 
		  		{ 	name  : "Dinner"
		  			,description : "Chicken and Chick Peas"
		  			,kcal : 415
		  			, nutrition : {
		  				protein : 150
		  				, carbs : 200
		  				, fats : 50 
		  			} 		
		  		}
		  		,{ 	name  : "Breakfast"
		  			,description : "OatMeal"
		  			,kcal : 300
		  			, nutrition : {
		  				protein : 50
		  				, carbs : 200
		  				, fats : 50 
		  			}  		
		  		}
		  		,{ 	name  : "snack"
		  			,description : "Coffee"
		  			,kcal : 90
		  			, nutrition : {
		  				protein : 10
		  				, carbs : 20
		  				, fats : 0 
		  			}  		
		  		}
		  	] ;
		  	
		  }
		}


		$scope.addMeal = function (){

			$scope.meals[$scope.meals.length] = new Object($scope.newMeal);
			$scope.newMeal = null;
		}
		

});