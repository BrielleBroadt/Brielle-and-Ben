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
const domain = "";

const apiUrl = `https://haveibeenpwned.com/api/v3/breaches`;

fetch(apiUrl, {
  headers: {
    "Accept": "application/json",
    "User-Agent": "PhishNado", // Replace with your app's name or identifier
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
  