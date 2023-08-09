const num = true;
const char = true;
const caps = true;
const len = 18; // min 7
const apiKey = "f403ba2a0a0342f3a0385bda04013303"

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
