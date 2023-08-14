// Password API
const memeEl = document.getElementById("checkbox-meme");
var button = document.getElementById("password-button");

button.addEventListener('click', function() {
  var num = document.getElementById('num');
  var char = document.getElementById('char');
  var caps = document.getElementById('caps');
  
  var newPassword = document.getElementById("new-password");
  const fetchUrl = `https://passwordinator.onrender.com?num=${num.checked}&char=${char.checked}&caps=${caps.checked}&len=18`;
  var password = "";
  fetch(fetchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      password = (data.data);
      newPassword.textContent = password;
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
    // memeEl.style.display = 'block';
    // memeEl.setAttribute("src", './assets/images/tada.png');
})

num.addEventListener('click', checkCheckboxes)
char.addEventListener('click', checkCheckboxes)
caps.addEventListener('click', checkCheckboxes)

function checkCheckboxes() {
  memeEl.style.display = 'block';
  if (num.checked + char.checked + caps.checked == 1) {
    memeEl.setAttribute("src", './assets/images/it-doesnt-do-anything.jpeg');
  } else if (num.checked + char.checked + caps.checked == 2) {
    memeEl.setAttribute("src", './assets/images/are-you-listening.gif');
  } else if (num.checked + char.checked + caps.checked == 3) {
    memeEl.setAttribute("src", './assets/images/you-have-no-power-here.jpeg');
  } else {
    memeEl.style.display = 'none';
  }
}

// Joke API
document.getElementById('fetchJokeButton').addEventListener('click', () => {
  var category = 'Programming';
  const any = document.getElementById("Any");
  const programming = document.getElementById("Programming");
  const dark = document.getElementById("Dark");
  const pun = document.getElementById("Pun");
  const spooky = document.getElementById("Spooky");
  const christmas = document.getElementById("Christmas");
  const misc = document.getElementById("Miscellaneous");
  var joke_categories = [any,programming,dark,pun,spooky,christmas,misc];

  for (cat of joke_categories) {
    if (cat.checked) {
      category = cat.id;
    }
  }

  const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const jokeEl = document.getElementById('jokeEl');

      if (data.type === 'single') {
        jokeEl.innerHTML = `<p>${data.joke}</p>`;
      } else if (data.type === 'twopart') {
        jokeEl.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
});

// Wizard hat generator
const images = [
  './assets/images/wizardhat1.jpg',
  './assets/images/wizardhat2.jpg',
  './assets/images/wizardhat3.jpg',
  './assets/images/wizardhat4.jpg',
  './assets/images/wizardhat5.jpg',
  './assets/images/wizardhat6.jpg'
];

const randomImageElement = document.getElementById('randomImage');
const showRandomBtn = document.getElementById('showRandomBtn');

showRandomBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImageUrl = images[randomIndex];
  randomImageElement.src = randomImageUrl;
  var text = document.getElementById("textField");
  text.style.display = "block";
});

function init() {
  memeEl.style.display = 'none';
}

init();