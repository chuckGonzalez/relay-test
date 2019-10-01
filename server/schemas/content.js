const { GraphQLUnionType } = require('graphql');

module.exports = new GraphQLUnionType({
  name: 'Content',
  description: 'Unidad minima de contruccion de paginas',
  types: [require('./modules/slider'), require('./modules/pleca')],
  resolveType: ({ __typename }) => {
    return require(`./modules/${__typename}`);
  },
});
