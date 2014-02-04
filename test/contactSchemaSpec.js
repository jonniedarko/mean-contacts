var expect = require("chai").expect;
var MongoClient = require('mongodb').MongoClient;
var Contacts = require("../models/ContactSchema.js")("localhost","contact_test");

//var provider = 



describe("ContactSchema", function() {
   describe(".add() New Contact", function() {

      it("fgasgag", function(done){
      	var mongo = require('mongoskin');
		var contacts = mongo.db('localhost:27017/contact_test').collection('contacts')
		contacts.drop();
      	//contacts.drop();
      	/*contacts.insert({name : "John"
           	,email : "John@gmail.com"
           	,phone : "+353879310394"});
*/
      	done();


      });

      it("It should add a new Contact", function(done){
           //Test Goes Here
           var newContact = {
           	name : "John"
           	,email : "John@gmail.com"
           	,phone : "+353879310394"
           }
           results = Contacts.add(newContact, function(result){
           		var data = result.data;
           		expect(data.name).to.equal(newContact.name);
           		expect(data.email).to.equal(newContact.email);
           		expect(data.phone).to.equal(newContact.phone);
           		done();
           });
      

	      Contacts.add(newContact, function(result){
	      	console.log("\n\nresults:"+JSON.stringify(result));
	      	expect(result.data).to.equal(null);
	      	expect(data.error).to.not.equal(null);
	      });
       });
       
   });
});