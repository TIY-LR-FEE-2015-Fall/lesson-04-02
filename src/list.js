import TodoItem from './item';

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

export default TodoList;
