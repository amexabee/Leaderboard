import Store from './store.js';

const store = new Store();

export default class Manage {
  add = (item) => {
    store.list.push(item);
    store.store();
    this.printScores(item);
  };

  removeAll = () => {
    store.list.length = 0;
    this.clear();
    store.store();
  };

  clear = () => {
    document.getElementById('scores-list').innerHTML = '';
  };

  printScores = (item) => {
    document.getElementById(
      'scores-list',
    ).innerHTML += `<li>${item.name} : ${item.score}</li>`;
  };
}
