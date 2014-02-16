/*
 * GET home page.
 */

exports.index = function(contacts){
	return function (request, response){
	  response.render('index', {
	    title: 'Express'
	    ,contacts: contacts
	  });
   
  };
};

exports.addContact = function(contacts){
	return function(request, response){
		contacts.push(request.body);
		response.json({ contacts : contacts })
	}
}

exports.contacts = function(){
	return function(request, response){
		response.render('contacts');
	}
}

exports.mobile = function(){
	return function (request, response){
	  response.render('mobile');
   
  };
};