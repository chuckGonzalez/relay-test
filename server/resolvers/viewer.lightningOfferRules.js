const { LIGHTNING_OFFER_MICROSERVICE = 'http://localhost:2022', NODE_ENV = 'stage' } = process.env;

const fetch = require('node-fetch');

module.exports = () => {
  let offerId;
  return fetch(`${LIGHTNING_OFFER_MICROSERVICE}?list=true`, {
    headers: { environment: NODE_ENV },
  })
    .then((res) => res.json())
    .then(({ data, error }) => {
      if (error) throw new Error(error);

      return (data || []).map((el) => ({ ...el, id: el._id }));
    });
};
