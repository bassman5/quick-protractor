'use strict';

var AngularHomepage = function() {
  this.nameInput = element(by.model('yourName'));
  this.greeting  = element(by.binding('yourName'));

  this.get = function() {
    browser.get('/'); // base url is set in protractor.conf.js
  };

  this.setName = function(name) {
    this.nameInput.sendKeys(name);
  };
};

module.exports = AngularHomepage;