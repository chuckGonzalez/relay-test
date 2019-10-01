const { GraphQLInputObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'LinkInput',
  description: 'Campo primario de link',
  fields: () => ({
    value: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    target: {
      type: GraphQLString,
    },
    postMode: {
      type: GraphQLString,
    },
    analytics: {
      type: require('./linkTag.input'),
    },
  }),
});
