const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const base64url = require('base64url');

function toCursor({ value }) {
  return base64url.encode(value.toString());
}

function fromCursor(string) {
  const value = base64url.decode(string);
  if (value) {
    return { value };
  } else {
    return null;
  }
}

const Cursor = new GraphQLScalarType({
  name: 'Cursor',
  serialize(value) {
    if (value.value) {
      return toCursor(value);
    } else {
      return null;
    }
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return fromCursor(ast.value);
    } else {
      return null;
    }
  },
  parseValue(value) {
    return fromCursor(value);
  },
});

module.exports = Cursor;
