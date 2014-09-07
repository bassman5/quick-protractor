'use strict';

var GoogleHomepage = require('../pages/googleHomepage.js');

describe('google search', function() {
  var googleHomepage = new GoogleHomepage();
  var ptor = protractor.getInstance();

  it('should search for pages', function() {
    // ignoreSynchronization turns off the angularjs specific code, now you have to wait for elements
    // You can turn it on and off for specific tests
    ptor.ignoreSynchronization = true;
    googleHomepage.get();

    googleHomepage.search('Cheese');

    expect(ptor.getTitle()).toEqual('Cheese - Google Search');
    expect(googleHomepage.resultStats.getText()).toMatch('About .* results .*');
  });

});