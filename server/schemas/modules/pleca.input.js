const { GraphQLInputObjectType } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'PlecaInput',
  description: 'Barra informativa input',
  fields: () => ({
    image: {
      type: require('../primitives/image.input'),
    },
    link: {
      type: require('../primitives/link.input'),
    },
  }),
});
