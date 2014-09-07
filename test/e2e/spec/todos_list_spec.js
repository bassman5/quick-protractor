'use strict';

var AngularTodopage = require('../pages/angularTodoPage.js');

describe('todo list', function() {
  var angularTodoPage = new AngularTodopage();

  beforeEach(function() {
    angularTodoPage.get();
  });

  it('should list todos', function() {
    expect(angularTodoPage.todoList.count()).toEqual(2);
    expect(angularTodoPage.todoList.get(1).getText()).toEqual('build an angular app');
  });

  it('should add a todo', function() {
    angularTodoPage.addTodo('write a protractor test');

    expect(angularTodoPage.todoList.count()).toEqual(3);
    expect(angularTodoPage.todoList.get(2).getText()).toEqual('write a protractor test');
  });
});
