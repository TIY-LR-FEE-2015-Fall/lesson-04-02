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

export default TodoItem;
