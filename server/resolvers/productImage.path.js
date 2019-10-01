module.exports = (parent, { size }) =>
  parent.path
    .replace('#width#', size)
    .replace('#height#', size)
    .replace(/#PLACEHOLDER#/g, size);
