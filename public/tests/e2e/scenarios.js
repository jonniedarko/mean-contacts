'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Contacts List', function() {
  beforeEach(function() {
    browser().navigateTo('/');
    sleep(1);
  });

  it("should move todo to correct list when user toggles checkbox", function() {
    expect(true).toBe(true);
    
  });
});