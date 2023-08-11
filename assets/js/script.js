var button = document.getElementById("password-button");
var newPassword = document.getElementById("new-password");

button.addEventListener('click', function() {
  const fetchUrl = `https://passwordinator.onrender.com?num=true&char=true&caps=true&len=18`;
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