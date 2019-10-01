const { GraphQLInputObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'ColorInput',
  description: 'Campo primario de color',
  fields: () => ({
    value: {
      type: GraphQLString,
    },
  }),
});
