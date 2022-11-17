export default class Manage {
  add = async (url, name, score) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  printScores = async (url) => {
    const request = await fetch(url);
    request.json().then((e) => {
      e.result.forEach((element) => {
        document.getElementById(
          'scores-list',
        ).innerHTML += `<li>${element.user} : ${element.score}</li>`;
      });
    });
  };
}
