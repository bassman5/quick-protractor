'use strict';

var AngularTodopage = function() {
  this.todoList = element.all(by.repeater('todo in todos'));
  this.addTodo = function (text) {
    var el = element(by.model('todoText'));
    el.sendKeys(text);
    this.addButton.click();
  };

  this.addButton = element(by.css('[value="add"]'));

  this.get = function() {
    browser.get('/'); // base url is set in protractor.conf.js
  };

};

module.exports = AngularTodopage;