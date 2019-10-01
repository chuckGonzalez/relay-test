const { POSTAL_SERVICE = 'http://localhost:2028' } = process.env;
const fetch = require('node-fetch');
const headers = {
  'Content-Type': 'application/json',
};

module.exports = (_, { postalCode }) => {
  return fetch(POSTAL_SERVICE, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: postalCode,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const { data, error } = res;
      if (error) throw new Error(JSON.stringify(error));
      else if (data) return data;
    });
};
