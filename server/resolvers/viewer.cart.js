const { CART_SERVICE = 'http://localhost:2026', NODE_ENV = 'stage' } = process.env;
const fetch = require('node-fetch');
const headers = {
  environment: NODE_ENV,
  'Content-Type': 'application/json',
};

module.exports = (parent, args) => {
  const { operationType } = parent;
  const isQuery = operationType === 'QUERY';
  const method = (isQuery && 'POST') || 'PUT';

  return fetch(CART_SERVICE, {
    method,
    headers,
    body: JSON.stringify({
      ...args,
      viewer: parent.id,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const { data, error } = res;
      if (error) throw new Error(JSON.stringify(error));
      else if (data)
        return {
          ...data,
          id: `Cart:${data._id}`,
        };
      else return {};
    });
};
