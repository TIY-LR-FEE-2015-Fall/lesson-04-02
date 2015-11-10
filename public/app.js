(function() {
  var todoList = document.querySelector('.todos');
  var itemInput = document.querySelector('.new-todo__input');
  var itemForm = document.querySelector('.new-todo');
  var doneFilter = document.querySelector('.todo-options__button--done');

  var data = [
    {name: `Milk`},
    {name: `Dog Food`, done: true},
    {name: `Cereal`},
    {name: `Ice Cream`},
    {name: `Orange Juice`},
  ];

  function TodoItem(name, done) {
    this.name = name;
    this.done = done || false;

    // Create a DOM element to represent our TodoItem
    this.element = document.createElement('li');
    this.element.innerHTML = this.name;

    if (this.done) {
      this.element.classList.add('done');
    }

    this.element.addEventListener('click', this.toggleComplete.bind(this));
  }

  TodoItem.prototype.toggleComplete = function() {
    // Update done status
    this.done = !this.done;
    /* Same as
    if (this.done) {
      this.done = false;
    } else {
      this.done = true;
    }
    */

    // Update DOM
    this.element.classList.toggle('done');
  };

  var addItemToList = (item, index) => {
    var todo = new TodoItem(item.name, item.done);

    todoList.appendChild(todo.element);
  };

  data.forEach(addItemToList);

  var addNewItemFromInput = (ev) => {
    ev.preventDefault();
    var title = itemInput.value;
    itemInput.value = '';

    var todo = {name: title};
    addItemToList(todo);
  };

  itemForm.addEventListener('submit', addNewItemFromInput);

  doneFilter.addEventListener('click', () => {
    doneFilter.classList.toggle('todo-options__button--active');
    todoList.classList.toggle('new-todo--done-only');
  });

  console.dir(data);
})();
