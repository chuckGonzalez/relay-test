const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Pleca',
  description: 'Barra informativa',
  fields: () => ({
    image: {
      type: require('../primitives/image'),
    },
    link: {
      type: require('../primitives/link'),
    },
    js: {
      type: require('../primitives/JSDependency'),
      args: {
        module: {
          type: GraphQLString,
        },
      },
      resolve: (parent, { module }) => require('../primitives/JSDependency').toJSDependency(module),
    },
  }),
});
