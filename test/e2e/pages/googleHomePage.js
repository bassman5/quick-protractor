'use strict';

var GoogleHomepage = function() {
  this.searchInput = element(by.name('q'));
  this.resultStats = element(by.id('resultStats'));

  this.get = function() {
    browser.get('http://www.google.co.uk');  // override base url from protractor.conf.js
  };

  this.search = function(text) {
    this.searchInput.sendKeys(text);
    this.searchInput.submit();
    this.waitFor(this.resultStats);
  };
  
  this.waitFor = function(el) {
    // You can use ptor.sleep(5000); or better browser.wait with isElementPresent
    browser.wait(function() {
      return protractor.getInstance().isElementPresent(el);
    }, 5000);
  }
};

module.exports = GoogleHomepage;