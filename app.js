import { NoteList } from './NoteList.js';

const newList = new NoteList(document.getElementById('app'), 'my', [{name: 'Дело 1'}]);

document.getElementById('action').addEventListener('click', function () {
  newList.add(prompt('название дела?'));
  console.log(newList);
});
