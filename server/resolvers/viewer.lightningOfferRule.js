const { LIGHTNING_OFFER_MICROSERVICE = 'http://localhost:2022', NODE_ENV = 'stage' } = process.env;
const fetch = require('node-fetch');

module.exports = ({ operationType }, { rule }) => {
  if (operationType === 'MUTATION') {
    const isDelete = !rule.startDate && !rule.endDate && !rule.sku;

    return fetch(LIGHTNING_OFFER_MICROSERVICE, {
      method: (isDelete && 'DELETE') || 'POST',
      headers: {
        environment: NODE_ENV,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(rule),
    })
      .then((res) => res.json())
      .then(({ data, error }) => {
        if (error) throw new Error(error);
        return { ...rule, id: data._id };
      });
  }
};
