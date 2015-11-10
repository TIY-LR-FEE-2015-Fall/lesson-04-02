(function() {
  var homeTodoUl = document.querySelector('.home-todos');
  var homeTodoForm = document.querySelector('.home-new-todo');
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

  function TodoList(element, formElement) {
    this.element = element;
    this.formElement = formElement;
    this.items = [];

    this.formElement.addEventListener('submit', this.addItemFromFormInput.bind(this));
  }

  TodoList.prototype.addNewItem = function(item) {
    var todo = new TodoItem(item.name, item.done);

    // Store new TodoItem into the items array
    this.items.push(todo);

    this.element.appendChild(todo.element);
  };

  TodoList.prototype.addItemFromFormInput = function(ev) {
    // Stop form from submitting
    ev.preventDefault();

    var input = this.formElement.querySelector('input');

    // Get value from user input
    var title = input.value;

    // Reset the form
    input.value = '';

    // Add item to existing list
    var todo = {name: title};
    this.addNewItem(todo);
  };

  TodoList.prototype.toggleOnlyComplete = function() {
    this.filtered = !this.filtered;

    // This is what we want to show after the button is done clicking
    var itemsToShow = this.items;

    // Clear out list to get started
    this.element.innerHTML = '';

    if (this.filtered) {
      itemsToShow = this.items.filter((item) => {
        return item.done;
      });
    }

    itemsToShow.forEach((item) => {
      this.element.appendChild(item.element);
    });
  };

  var homeList = new TodoList(homeTodoUl, homeTodoForm);
  var workList = new TodoList(document.querySelector('.work-todos'), document.querySelector('.work-new-todo'));

  data.forEach(homeList.addNewItem.bind(homeList));

  /* Same as
  data.forEach((item) => {
    homeList.addNewItem(item);
  });
  */

  doneFilter.addEventListener('click', () => {
    doneFilter.classList.toggle('todo-options__button--active');
    homeList.toggleOnlyComplete();
  });

  console.dir(data);
})();
