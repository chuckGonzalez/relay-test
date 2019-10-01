const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Text',
  description: 'Campo primario de texto',
  fields: () => ({
    value: {
      type: GraphQLString,
    },
  }),
});
