const {
  NODE_ENV = 'stage',
  LIGHTNING_OFFER_MICROSERVICE = 'http://localhost:2022',
  PRODUCT_MICROSERVICE = 'http://localhost:2023',
} = process.env;

const fetch = require('node-fetch');

module.exports = () => {
  let offerId;
  return fetch(LIGHTNING_OFFER_MICROSERVICE, {
    headers: {
      environment: NODE_ENV,
    },
  })
    .then((res) => res.json())
    .then(({ data, error }) => {
      if (error) throw new Error(error);
      if (data) {
        offerId = data._id;
        if (data.sku) return data.sku;
      }
      return null;
    })
    .then((sku) => {
      if (!sku)
        return {
          id: 'LIGHTNING_OFFER_DATA',
          offerId: null,
          product: null,
        };

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
          if (error) throw new Error(JSON.stringify(error));
          if (data && data[0]) {
            return {
              id: 'LIGHTNING_OFFER_DATA',
              offerId: offerId,
              product: data[0],
            };
          } else return null;
        });
    });
};
