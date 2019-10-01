const { GraphQLScalarType } = require('graphql');

const JSDependency = new GraphQLScalarType({
  name: 'JSDependency',
  description: 'A scalar to utilize the @match and @module directive from relay.',
  serialize: (value) => value,
});

module.exports = JSDependency;
module.exports.toJSDependency = (value) => value;
