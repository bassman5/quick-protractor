'use strict';

var AngularHomepage = require('../pages/angularHomePage.js');

describe('angularjs homepage', function() {
  var angularHomepage = new AngularHomepage();

  it('should greet the named user', function() {
    angularHomepage.get();

    angularHomepage.setName('Mick');
    expect(angularHomepage.greeting.getText()).toEqual('Hello Mick!');
  });
});