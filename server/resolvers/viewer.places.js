const { PLACES_SERVICE = 'http://localhost:2029' } = process.env;
const fetch = require('node-fetch');

module.exports = (_, { query }) => {
  if (!query) return [];

  return fetch(`${PLACES_SERVICE}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((res) => res.data);
};
