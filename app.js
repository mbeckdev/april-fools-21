'use strict';

const jokes = [
  {
    jokeText: 'APRIL POOLS!',
    jokeImg: 'pools-pexels-ingo-joseph-2618784.jpg',
  },
  {
    jokeText: 'APRIL MULES!',
    jokeImg: 'mules-pexels-donald-tong-90915.jpg',
  },
];

document.getElementById('hit-me-btn').addEventListener('click', hitMeClicked);

const changingTitle = document.getElementById('title');
const picture = document.getElementById('pic');

function hitMeClicked() {
  let randomIndex = Math.floor(Math.random() * jokes.length);
  changingTitle.textContent = jokes[randomIndex].jokeText;
  picture.setAttribute('src', `images/${jokes[randomIndex].jokeImg}`);
}
