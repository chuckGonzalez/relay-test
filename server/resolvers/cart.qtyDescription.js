module.exports = (parent) => {
  const qty = (parent.items || []).length;

  return `${qty} producto${(qty > 1 && 's') || ''}`;
};
//(parent.items || []).reduce((acc, item) => acc + item.qty, 0);
