const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Slider',
  description: 'Conjunto de slides',
  fields: () => ({
    slides: {
      type: new GraphQLList(require('./slide')),
    },
    minSlides: {
      type: GraphQLInt,
    },
    maxSlides: {
      type: GraphQLInt,
    },
    direction: {
      type: GraphQLString,
    },
    interval: {
      type: GraphQLInt,
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
