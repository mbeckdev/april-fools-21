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
  {
    jokeText: 'FOALS!',
    jokeImg: 'foal-pexels-elina-sazonova-1838569.jpg',
    objectFit: 'contain',
  },
];

document.getElementById('hit-me-btn').addEventListener('click', hitMeClicked);

const changingTitle = document.getElementById('title');
const punchline = document.getElementById('punchline');
const picture = document.getElementById('pic');
const april = document.getElementById('april');

picture.style.opacity = '0%';

let lastIndex = 0;
let randomIndex = 0;
function hitMeClicked() {
  // let randomIndex = Math.floor(Math.random() * jokes.length);
  randomIndex = getNewIndex();

  // changingTitle.textContent = jokes[randomIndex].jokeText;
  punchline.textContent = jokes[randomIndex].jokeText;

  picture.setAttribute('src', `images/${jokes[randomIndex].jokeImg}`);

  picture.style.objectFit = jokes[randomIndex].objectFit;

  april.textContent = 'APRIL';
  picture.style.opacity = '100%';
}

function getNewIndex() {
  randomIndex = Math.floor(Math.random() * jokes.length);
  if (randomIndex == lastIndex) {
    return getNewIndex();
  } else {
    lastIndex = randomIndex;
    return randomIndex;
  }
}
// Hi
