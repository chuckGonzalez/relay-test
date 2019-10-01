const { GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Slide',
  description: 'Imagen del banner',
  fields: () => ({
    image: {
      type: require('../primitives/image'),
    },
    link: {
      type: require('../primitives/link'),
    },
    callToAction: {
      type: require('../primitives/text'),
    },
  }),
});
