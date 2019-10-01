const { SHARP_MICROSERVICE = 'http://localhost:9999' } = process.env;

const fetch = require('node-fetch');

module.exports = (parent) => {
  return fetch(`${SHARP_MICROSERVICE}/transform?origin=${parent.image}`).then((res) => res.text());
};
