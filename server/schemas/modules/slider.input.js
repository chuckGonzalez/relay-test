const { GraphQLInputObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'SliderInput',
  description: 'Conjunto de slides',
  fields: () => ({
    slides: {
      type: new GraphQLList(require('./slide.input')),
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
  }),
});
