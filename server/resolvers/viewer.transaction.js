const { TRANSACTION_SERVICE = 'http://localhost:2027', NODE_ENV = 'stage' } = process.env;
const fetch = require('node-fetch');
const headers = {
  environment: NODE_ENV,
  'Content-Type': 'application/json',
};

module.exports = (parent, args) => {
  const { operationType } = parent;
  const isQuery = operationType === 'QUERY';

  if (isQuery) return null;

  return fetch(TRANSACTION_SERVICE, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...args,
      viewer: parent.id,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const { data, error } = res;
      return { id: (data && data.orderId) || null, message: error };
    });
};
