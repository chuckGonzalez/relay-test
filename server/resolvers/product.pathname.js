module.exports = ({ uri }) => {
  if (!uri) return null;
  return new URL(uri).pathname;
};
