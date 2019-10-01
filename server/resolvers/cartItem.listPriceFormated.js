module.exports = (parent) => `$${require('../misc/setCurrency')(parent.listPrice / 100)}`;
