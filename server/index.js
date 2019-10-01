const app = require('express')();
const Schema = require('./schema');
const { createServer } = require('http');
const graphqlHttp = require('express-graphql');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const server = createServer(app);
const { PORT = 2020, NODE_ENV = 'dev' } = process.env;
const isSandbox = NODE_ENV !== 'production';

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  );
  res.statusCode = 200;

  if (req.method === 'OPTIONS') return res.send();
  next();
});

app.use('/_graphql', graphqlHttp({ schema: Schema, graphiql: true /*isSandbox*/ }));

server.listen(PORT, () => {
  console.log(`Server listen on ${PORT}`);
});

SubscriptionServer.create(
  { execute, subscribe, schema: Schema },
  { server, path: '/subscriptions' },
);
