const { SEARCH_MICROSERVICE = 'http://localhost:2025', NODE_ENV = 'stage' } = process.env;
const fetch = require('node-fetch');

module.exports = (_, args) => {
  const { after, query, before, filters, defaultFilter, useAutocomplete } = args;

  if (!query && query !== '' && !(filters && filters.length) && !defaultFilter) return null;
  if (after && before) throw new Error('You cannot use after and both at same time');

  if (useAutocomplete)
    return fetch(`${SEARCH_MICROSERVICE}?query=${query}`, {
      method: 'GET',
      headers: {
        environment: NODE_ENV,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ error, data }) => {
        if (error) throw new Error(JSON.stringify(error, null, 4));
        else if (data) return data;
        else return {};
      });

  return fetch(SEARCH_MICROSERVICE, {
    method: 'POST',
    headers: {
      environment: NODE_ENV,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ ...args, collapseResults: true }),
  })
    .then((res) => res.json())
    .then(({ error, data }) => {
      if (error) throw new Error(JSON.stringify(error, null, 4));
      else if (data) return data;
      else return {};
    });
};
