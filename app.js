'use strict';

const jokes = [
  {
    jokeText: 'POOLS!',
    jokeImg: 'pools-pexels-ingo-joseph-2618784.jpg',
    objectFit: 'fill',
  },
  {
    jokeText: 'MULES!',
    jokeImg: 'mules-pexels-donald-tong-90915.jpg',
    objectFit: 'contain',
  },
  {
    jokeText: 'DROOLS!',
    jokeImg: 'drool-alien-41612_640.png',
    objectFit: 'contain',
  },
  {
    jokeText: 'FOALS!',
    jokeImg: 'foal-pexels-elina-sazonova-1838569.jpg',
    objectFit: 'contain',
  },
  {
    jokeText: 'JEWELS!',
    jokeImg: 'jewel-pexels-engin-akyurt-1458867.jpg',
    objectFit: 'scale-down',
  },
  {
    jokeText: 'SCHOOLS!',
    jokeImg: 'school-pexels-pixabay-207692.jpg',
    objectFit: 'fill',
  },
  {
    jokeText: 'STOOLS!',
    jokeImg: 'stool-pexels-athena-2180883.jpg',
    objectFit: 'fill',
  },
  {
    jokeText: 'TOOLS!',
    jokeImg: 'tools-pexels-pixabay-162553.jpg',
    objectFit: 'cover',
  },
];

document.getElementById('hit-me-btn').addEventListener('click', hitMeClicked);

const changingTitle = document.getElementById('title');
const punchline = document.getElementById('punchline');

const picture = document.getElementById('pic');

function hitMeClicked() {
  let randomIndex = Math.floor(Math.random() * jokes.length);
  // changingTitle.textContent = jokes[randomIndex].jokeText;
  punchline.textContent = jokes[randomIndex].jokeText;

  picture.setAttribute('src', `images/${jokes[randomIndex].jokeImg}`);

  picture.style.objectFit = jokes[randomIndex].objectFit;
}
