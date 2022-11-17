import Manage from '../modules/manage';
import './style.css';

const manage = new Manage();

document.getElementById('btn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  if (name && score) {
    manage.add({ name: name, score: score });
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  }
});

document.getElementById('refresh').addEventListener('click', (e) => {
  manage.removeAll();
});
