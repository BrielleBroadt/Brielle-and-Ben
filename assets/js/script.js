const num = true;
const char = true;
const caps = true;
const len = 18; // min 7
const apiKey = '33aaa9c75b944b7ca0b99e6c558d4ee3';


// GET https://haveibeenpwned.com/api/v3/breachedaccount/{account}
// hibp-api-key: ["f403ba2a0a0342f3a0385bda04013303"];

const fetchUrl = `https://passwordinator.onrender.com?num=${num}&char=${char}&caps=${caps}&len=${len}`;

fetch(fetchUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => {
    console.log(data.data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

  ////////////////////////

// const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const domain = "facebook.com";

const apiUrl = `https://haveibeenpwned.com/api/v3/breacheddomain/${domain}`;

fetch(apiUrl, {
  headers: {
    "User-Agent": "YourAppName", // Replace with your app's name or identifier
    "hibp-api-key": apiKey
  }
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Domain not found in breaches");
  }
})
.then(data => {
  console.log("Breaches:", data);
})
.catch(error => {
  console.error("Error:", error);
});
  
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