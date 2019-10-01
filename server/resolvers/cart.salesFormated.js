module.exports = (parent) => `$${require('../misc/setCurrency')(parent.sales / 100)}`;
