// import { NoteList } from './NoteList.js';
import { ToDo } from './ToDo.js';

const app = new ToDo(document.getElementById('app'));
// app.addUser('Мои дела', 'my');
// app.addUser('Дела Лены', 'Lena');
// app.addUser('Покупки', 'shop');

// const newList = new NoteList(document.getElementById('app'), 'my', [{name: 'Дело 1'}]);

document.getElementById('action').addEventListener('click', function () {
  app.addUser(prompt('Имя пользователя?'), 'sad');
});
