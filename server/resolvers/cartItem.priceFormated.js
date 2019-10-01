module.exports = (parent) => `$${require('../misc/setCurrency')(parent.price / 100)}`;
