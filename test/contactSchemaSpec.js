var expect = require("chai").expect;
var Contacts = require("../models/ContactSchema.js")("localhost","contact_test");

//var provider = 



describe("ContactSchema", function() {
   describe(".add() New Contact", function() {
   	var testContacts = [
					{name : "Dave"
			           	,email : "dave@gmail.com"
			           	,phone : "+353830310176"}
			           	,{name : "Jane"
			           	,email : "jane@gmail.com"
			           	,phone : "+35385239583"}
			           	,{name : "Tom"
			           	,email : "tom@gmail.com"
			           	,phone : "+35383419586"}
			           	];
   	before(function(done) {

		Contacts.contactModel.remove(function(err) {
			console.log('collection dropped');

			testContacts = testContacts.reverse();
			
			var total = testContacts.length,
				result = [];

			function saveAll() {
				var newContact = new Contacts.contactModel(testContacts.pop());

				newContact.save(function(err, saved) {
					if (err) throw err; //handle error

					result.push(saved[0]);

					if (--total) saveAll();
					else{
						done(); // all saved here	
					} 
				})
			}
			saveAll();
			
		});



	});


      it("Get all Contacts", function(done){
      	var testContacts = [
					{name : "Dave"
			           	,email : "dave@gmail.com"
			           	,phone : "+353830310176"}
			           	,{name : "Jane"
			           	,email : "jane@gmail.com"
			           	,phone : "+35385239583"}
			           	,{name : "Tom"
			           	,email : "tom@gmail.com"
			           	,phone : "+35383419586"}
			           	];

      		Contacts.getAll(function(error, data){
      			expect(data).to.not.equal(null);
      			expect(data.length).to.equal(3);
      			expect(data[0].name).to.equal(testContacts[0].name);
      			expect(data[1].email).to.equal(testContacts[1].email);
      			expect(data[2].phone).to.equal(testContacts[2].phone);

      			done();
      		})
      
			
       });

      it("Get a User by email", function (done){
      		Contacts.getUser("dave@gmail.com",function(error, data){
      			expect(data.name).to.equal("Dave")
      			expect(data.phone).to.equal("+353830310176");
      			done();
      		});
      });
       
   });
});
