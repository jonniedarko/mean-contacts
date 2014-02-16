exports.foodIndex = function(){
	return function (request, response){
	  response.render('food', {
	    title: 'Food Tracker'
	  });
   
  };
};

exports.foodIndexMobile = function(){
	return function (request, response){
	  response.render('foodmobile', {
	    title: 'Food Tracker Mobile'
	  });
   
  };
};