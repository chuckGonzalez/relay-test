module.exports = (parent) => `$${require('../misc/setCurrency')(parent.subtotal / 100)}`;
