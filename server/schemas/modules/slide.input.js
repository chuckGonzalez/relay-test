const { GraphQLInputObjectType } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'SlideInput',
  description: 'Imagen del banner',
  fields: () => ({
    image: {
      type: require('../primitives/image.input'),
    },
    link: {
      type: require('../primitives/link.input'),
    },
    callToAction: {
      type: require('../primitives/text.input'),
    },
  }),
});
