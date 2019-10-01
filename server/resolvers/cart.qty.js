module.exports = (parent) => (parent.items || []).length;
//(parent.items || []).reduce((acc, item) => acc + item.qty, 0);
