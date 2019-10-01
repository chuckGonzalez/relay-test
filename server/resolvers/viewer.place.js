const { PLACES_SERVICE = 'http://localhost:2029' } = process.env;
const fetch = require('node-fetch');

module.exports = (_, args) => {
  return fetch(`${PLACES_SERVICE}/geocode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ place: args.id }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => ({
      id: args.id,
      postalCode: res.postalCode,
      description: res.formattedAddress,
    }));
};
