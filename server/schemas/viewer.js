const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Viewer',
  description: 'Usuario que consulta la aplicación',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    token: {
      type: GraphQLString,
    },
    template: {
      type: require('./template'),
      resolve: require('../resolvers/viewer.template'),
      args: {
        uri: {
          type: GraphQLString,
        },
      },
    },
  }),
});

/**
 *
 * template: {
      type: require('./template.mutation'),
      resolve: require('../resolvers/viewer.template.mutation'),
      args: {
        id: {
          type: GraphQLID,
        },
        uri: {
          type: GraphQLString,
        },
        index: {
          type: GraphQLInt,
        },
        slider: {
          type: require('./modules/slider.input'),
        },
        pleca: {
          type: require('./modules/pleca.input'),
        },
        typename: {
          type: GraphQLString,
        },
      },
    }
 */
