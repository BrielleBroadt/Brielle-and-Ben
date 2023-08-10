const num = true;
const char = true;
const caps = true;
const len = 18; // min 7


const fetchUrl = `https://passwordinator.onrender.com?num=${num}&char=${char}&caps=${caps}&len=${len}`;
var password = "";
fetch(fetchUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => {
     password = (data.data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

  var button = document.getElementById("password-button");
  var newPassword = document.getElementById("new-password");
  button.addEventListener('click', function() {
  console.log(password)
    newPassword.textContent = password
  })


// Joke API
document.getElementById('fetchJokeButton').addEventListener('click', () => {
const category = 'Programming';
const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const jokeContainer = document.getElementById('jokeContainer');

    if (data.type === 'single') {
      jokeContainer.innerHTML = `<p>${data.joke}</p>`;
    } else if (data.type === 'twopart') {
      jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
});