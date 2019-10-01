const { MODULE_MICROSERVICE = 'http://localhost:2021', NODE_ENV = 'stage' } = process.env;
const fetch = require('node-fetch');

module.exports = (_, { uri }) => {
  if (!uri) return null;

  return fetch(`${MODULE_MICROSERVICE}?uri=${uri}`, {
    headers: {
      environment: NODE_ENV,
    },
  })
    .then((res) => res.json())
    .then(({ error, data }) => {
      if (error) throw new Error(error);

      return {
        uri,
        id: 'TEMPLATE',
        requestedUri: uri,
        modules: data.map((el, index) => ({
          id: `module:${el.typename}:${index}`,
          index,
          content: { ...el.content, __typename: el.typename },
        })),
      };
    });
};
