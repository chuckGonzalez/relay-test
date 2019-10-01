const { PLACES_SERVICE = 'http://localhost:2029' } = process.env;
const fetch = require('node-fetch');

module.exports = (parent) => {
  return (
    parent.postalCode ||
    fetch(`${PLACES_SERVICE}/geocode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ place: parent.id }),
    })
      .then((res) => res.json())
      .then((res) => res.data.postalCode)
  );
};
