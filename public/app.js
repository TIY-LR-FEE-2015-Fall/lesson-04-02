(function() {
  var homeList = document.querySelector('.todos--home');
  var homeItemInput = document.querySelector('.new-todo__input--home');
  var homeItemForm = document.querySelector('.new-todo--home');

  var workList = document.querySelector('.todos--work');
  var workItemInput = document.querySelector('.new-todo__input--work');
  var workItemForm = document.querySelector('.new-todo--work');

  var doneFilter = document.querySelector('.todo-options__button--done');

  var data = [
    {name: `Milk`},
    {name: `Dog Food`, done: true},
    {name: `Cereal`},
    {name: `Ice Cream`},
    {name: `Orange Juice`},
  ];

  function Todo(name, done) {
    this.name = name;
    this.done = done || false;
  };

  Todo.prototype.markComplete = function() {
    this.done = true;
  };

  Todo.prototype.addItemToList = function(list) {
    var listItem = document.createElement('li');

    listItem.innerHTML = this.name;
    var toggleDone = () => {
      this.done = !this.done;
      listItem.classList.toggle('done');
    };

    if (this.done) {
      listItem.classList.toggle('done');
    }

    listItem.addEventListener('click', toggleDone);

    list.appendChild(listItem);
  };

  function HomeTodo(name, done) {
    Todo.apply(this, arguments);

    this.addItemToList(homeList);
  }

  HomeTodo.prototype = new Todo();
  HomeTodo.prototype.constructor = HomeTodo;

  function WorkTodo(name, done) {
    Todo.apply(this, arguments);

    this.addItemToList(workList);
  }

  WorkTodo.prototype = new Todo();
  WorkTodo.prototype.constructor = WorkTodo;

  var todos = data.map((item) => {
    return new HomeTodo(item.name, item.done);
  });

  var addNewItemFromInput = (ev) => {
    ev.preventDefault();
    var title = homeItemInput.value;
    homeItemInput.value = '';

    var todo = new HomeTodo(title);
  };

  homeItemForm.addEventListener('submit', addNewItemFromInput);

  var addNewWorkItem = (ev) => {
    ev.preventDefault();
    var title = workItemInput.value;
    workItemInput.value = '';

    var todo = new WorkTodo(title);
  };

  workItemForm.addEventListener('submit', addNewWorkItem);

  doneFilter.addEventListener('click', () => {
    doneFilter.classList.toggle('todo-options__button--active');
    homeList.classList.toggle('new-todo--done-only');
  });

  console.dir(todos);
})();
