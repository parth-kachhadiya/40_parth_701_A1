const fetch = require('node-fetch');

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');
    const data = await response.text();
    console.log('Fetched Google homepage data:');
    console.log(data.substring(0, 500)); // Print first 500 chars for brevity
  } catch (err) {
    console.error('Error fetching Google homepage:', err);
  }
}

fetchGoogleHomePage();
