'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('ContactsControllerTest', function() {
	var scope, ctrl;
  beforeEach(module('contactsApp') );
  beforeEach(inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        ctrl = $controller('ContactsController', {$scope: scope});
    }));

  it("Test Controller", function() {
 
      expect(scope.Test).toBe("Hello");
      	var ppl = [
      { description : "no 1",
        due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 1 day from now
        done : false
      },
      { description : "no 2",
        due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        done : false
      },
      { description : "no 3",
        due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        done : true
      },
    ];

    scope.setContacts(ppl);

    expect(scope.contacts.length).toBe(3);
    
  });
});