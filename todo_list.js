var newTodoList = function() {
  this.tasks = []
};

newTodoList.prototype.add = function(task){
  var new_task = new Task(task)
  this.tasks.push(new_task);
  var index = this.tasks.indexOf(new_task);
  new_task.id = index + 1;
};

newTodoList.prototype.list = function(){
  for(var i = 0; i < this.tasks.length; i++){
    console.log(this.tasks[i]);
  }
}

newTodoList.prototype.remove = function(task){
  var id = task.id - 1;
  this.tasks.splice(id, 1);
}


var Task = function(description){
  this.id = NaN;
  this.description = description;
  this.completed = false;
};

Task.prototype.complete = function(){
  this.completed = true;
};




var todoList = newTodoList();

// Note we are using a JavaScript constructor now.
var groceryList = new newTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);


groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
