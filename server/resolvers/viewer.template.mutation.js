const { MODULE_MICROSERVICE = 'http://localhost:2021', NODE_ENV = 'stage' } = process.env;
const fetch = require('node-fetch');

module.exports = (_, args) => {
  return fetch(`${MODULE_MICROSERVICE}?uri=${args.uri}`, {
    method: 'POST',
    headers: {
      environment: NODE_ENV,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id: args.id || null,
      uri: args.uri,
      index: args.index,
      typename: args.typename,
      content: args[args.typename],
    }),
  })
    .then((res) => res.json())
    .then(({ error }) => {
      if (error) throw new Error(error);
      return args;
    });
};
