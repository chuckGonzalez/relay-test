module.exports = (parent) => `$${require('../misc/setCurrency')(parent.lastPrice || 0)}`;
