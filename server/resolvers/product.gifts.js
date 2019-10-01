const fetch = require('node-fetch');
const { PRODUCT_MICROSERVICE = 'http://localhost:2023' } = process.env;

module.exports = ({ skuGifts }) => {
  if (!skuGifts) return null;
  return fetch(PRODUCT_MICROSERVICE, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ items: skuGifts }),
  })
    .then((res) => res.json())
    .then(({ data, error }) => {
      if (error) throw new Error(JSON.stringify(error));
      if (data) return data;
      else return null;
    });
};
