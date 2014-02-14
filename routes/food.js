exports.foodIndex = function(){
	return function (request, response){
	  response.render('food', {
	    title: 'Food Tracker'
	  });
   
  };
};