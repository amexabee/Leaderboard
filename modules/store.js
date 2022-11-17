export default class Store {
  constructor() {
    this.list = [];
  }

  store() {
    localStorage.setItem('Leaderboard', JSON.stringify(this.list));
  }
}
