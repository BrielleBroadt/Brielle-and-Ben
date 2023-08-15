// Password API
const memeEl = document.getElementById("checkbox-meme");
var button = document.getElementById("password-button");

button.addEventListener('click', function() {
  var num = document.getElementById('num');
  var char = document.getElementById('char');
  var caps = document.getElementById('caps');

  const loadingIndicator2 = document.getElementById("loadingIndicator1");
  loadingIndicator1.style.display = "block";
  
  var newPassword = document.getElementById("new-password");
  const fetchUrl = `https://passwordinator.onrender.com?num=${num.checked}&char=${char.checked}&caps=${caps.checked}&len=18`;
  var password = "";
  fetch(fetchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      loadingIndicator2.style.display = "none";
      return response.json();
    })
    .then((data) => {
      password = (data.data);
      newPassword.textContent = password;
    })
    .catch((error) => {
      loadingIndicator2.style.display = "none";
      console.error('Fetch error:', error);
    });
    memeEl.setAttribute("src", './assets/images/tada.png');
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
    memeEl.setAttribute("src", "./assets/images/wizard-will-now-install.jpeg");
  }
}

// Joke API
var jokeGenerated = false;
var savedJoke;

document.getElementById('fetchJokeButton').addEventListener('click', () => {
  savedJoke = [];
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

  const loadingIndicator2 = document.getElementById("loadingIndicator2");
  loadingIndicator2.style.display = "block";
  loadingIndicator2.scrollIntoView({behavior: 'smooth'});

  const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const jokeEl = document.getElementById('jokeEl');

      if (data.type === 'single') {
        savedJoke[0] = data.joke;
        jokeEl.innerHTML = `<p>${data.joke}</p>`;
      } else if (data.type === 'twopart') {
        savedJoke[0] = data.setup;
        savedJoke[1] = data.delivery;
        jokeEl.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      }
      jokeEl.scrollIntoView({behavior: 'smooth'});
      loadingIndicator2.style.display = "none";
      jokeGenerated = true;
    })
    .catch(error => {
      console.error('An error occurred:', error);
      loadingIndicator2.style.display = "none";
    });
  });

saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener("click", function(){
  if (jokeGenerated) {
    console.log(savedJoke);
  }
})

// Wizard hat generator
const images = [
  // './assets/images/wizardhat1.jpg',
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
  // var text = document.getElementById("textField");
  // text.style.display = "block";
});
