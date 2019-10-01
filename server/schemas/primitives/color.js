const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Color',
  description: 'Campo primario de color',
  fields: () => ({
    value: {
      type: GraphQLString,
    },
  }),
});
