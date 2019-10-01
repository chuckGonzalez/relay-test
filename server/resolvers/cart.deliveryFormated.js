module.exports = (parent) => `$${require('../misc/setCurrency')(parent.delivery / 100)}`;
