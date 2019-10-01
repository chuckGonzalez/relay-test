const { GraphQLInputObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'TextInput',
  description: 'Campo primario de texto',
  fields: () => ({
    value: {
      type: GraphQLString,
    },
  }),
});
