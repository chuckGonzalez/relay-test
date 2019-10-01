const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Module',
  description: 'Unidad minima de contruccion de paginas',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    index: {
      type: GraphQLInt,
    },
    content: {
      type: require('./content'),
      args: {
        supported: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))),
        },
      },
      resolve: (parent) => parent.content,
    },
  }),
});
