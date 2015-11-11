import TodoList from './list';

export default function() {
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
}
