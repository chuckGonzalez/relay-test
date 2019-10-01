module.exports = (parent) => `$${require('../misc/setCurrency')(parent.value / 100)}`;
