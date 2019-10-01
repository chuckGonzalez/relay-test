module.exports = (parent) => (parent.description || '').replace(/<[^>]*>?/gm, '');
