const { PRODUCT_MICROSERVICE = 'http://localhost:2023', NODE_ENV = 'stage' } = process.env;
const fetch = require('node-fetch');

module.exports = (_, { sku }) => {
  return fetch(PRODUCT_MICROSERVICE, {
    method: 'POST',
    headers: {
      environment: NODE_ENV,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ items: [sku] }),
  })
    .then((res) => res.json())
    .then(({ data, error }) => {
      if (error) throw new Error(error);
      if (data && data[0]) {
        return data[0];
      } else return null;
    });
};
