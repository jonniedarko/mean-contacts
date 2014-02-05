var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;

exports = module.exports = function(host, app) {

	var DB = Mongoose.createConnection(host, app);
	var contactSchema = new Schema({
		name : { type : String, required : true}
		,email : {type : String, required : true, unique: true}
		,phone : { type : String, required: true}
	}
	,{strict: true}
	);

	var contactModel = DB.model('contacts', contactSchema);
	
	var add = function (contact, callback){

		var contact = new contactModel(contact);
		var obj ={};
		contact.save(function(error, contact){
			var returnObj = { data: null, error : null};
			if(error){
				returnObj.error = error;
				callback(returnObj);
			}else{
				returnObj.data= contact;
				callback(returnObj);
			}
			
		});

	}

	var getAll = function(callback){
		//var contact = new contactModel();
		contactModel.find({},function(error, data){
			//console.log('data :'+data);
			callback(error, data);
		});
	}
	var getUser = function(email, callback){
		//var contact = new contactModel();
		contactModel.find({"email": email},function(error, data){
			//console.log('data :'+data);
			callback(error, data[0]);
		});
	}

	return {
		contactModel : contactModel
		,add : add
		,getAll : getAll
		,getUser: getUser

	}


};






