module.exports = (parent) => `$${require('../misc/setCurrency')(parent.total / 100)}`;
