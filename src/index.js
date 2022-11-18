import Manage from '../modules/manage.js';
import './style.css';

const manage = new Manage();
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/X1HZAkVXoHqrPVHomPEH/scores/';
document.getElementById('btn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  if (name && score) {
    manage.add(url, name, score);
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  }
});

document.getElementById('refresh').addEventListener('click', () => {
  document.getElementById('scores-list').innerHTML = '';
  manage.printScores(url);
});
